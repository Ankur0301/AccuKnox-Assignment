import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget, removeWidget } from "../features/widgets/widgetSlice";

const widgetData = {
  CSPM: ["Cloud Accounts", "Cloud Account Risk Assessment"],
  CWPP: ["Workload Scan", "Runtime Threat Detection"],
  Image: ["Container Image Scan"],
  Ticket: ["Open Tickets", "Resolved Tickets"],
};

export default function AddWidgetModal({ open, onClose }) {
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widgets.widget.widgets);
  const [selectedTab, setSelectedTab] = useState("CSPM");

  const isSelected = (widget) => widgets.includes(widget);

  const toggleWidget = (widget) => {
    if (isSelected(widget)) {
      dispatch(removeWidget(widget));
    } else {
      dispatch(addWidget(widget));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl p-0 overflow-hidden">
        <div className="bg-[#1a1a6e] px-6 py-4 flex justify-between items-center">
          <DialogTitle className="text-white text-base font-medium">
            Add Widget
          </DialogTitle>
          <button onClick={onClose} className="text-white text-xl">&times;</button>
        </div>

        <div className="px-6 py-4">
          <p className="text-sm text-muted-foreground mb-4">
            Personalise your dashboard by adding the following widget
          </p>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-4">
            <TabsList className="w-full grid grid-cols-4 bg-transparent p-0 gap-2">
              {Object.keys(widgetData).map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`text-sm py-2 rounded-none border-b-2 ${
                    selectedTab === key
                      ? "border-[#1a1a6e] text-[#1a1a6e]"
                      : "border-transparent text-gray-400"
                  }`}
                >
                  {key}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="space-y-3">
            {widgetData[selectedTab]?.map((widget) => (
              <label
                key={widget}
                className="flex items-center space-x-3 border rounded px-4 py-2 cursor-pointer"
              >
                <Checkbox
                  checked={isSelected(widget)}
                  onCheckedChange={() => toggleWidget(widget)}
                />
                <span className="text-sm">{widget}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 flex justify-end border-t bg-white">
          <Button onClick={onClose} variant="outline" className="rounded-md">
            Cancel
          </Button>
          <Button onClick={onClose} className="ml-2 rounded-md bg-[#1a1a6e]">
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
