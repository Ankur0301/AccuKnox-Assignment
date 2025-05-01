import React, { useState } from "react";
import { useSelector } from "react-redux";
import WidgetCard from "../components/WidgetCard";
import AddWidgetModal from "../components/AddWidgetModal";

const Home = () => {
  const widgets = useSelector((state) => state.widgets.widget.widgets);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categorizeWidget = (title) => {
    if (["Cloud Accounts", "Cloud Account Risk Assessment"].includes(title))
      return "cspm";
    if (
      [
        "Workload Scan",
        "Runtime Threat Detection",
        "Top 5 Namespace Specific Alerts",
        "Workload Alerts",
      ].includes(title)
    )
      return "cwpp";
    if (["Container Image Scan"].includes(title)) return "image";
    if (["Open Tickets", "Resolved Tickets"].includes(title)) return "ticket";
    return "other";
  };

  const structuredWidgets = widgets.map((title) => ({
    title,
    category: categorizeWidget(title),
  }));

  const groupedWidgets = structuredWidgets.reduce((acc, widget) => {
    if (!acc[widget.category]) acc[widget.category] = [];
    acc[widget.category].push(widget);
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="font-bold text-2xl">CNAPP Dashboard</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1a1a6e] text-white px-4 py-2 rounded"
        >
          Add Widget
        </button>
      </div>

      {Object.keys(groupedWidgets).length === 0 ? (
        <p className="text-gray-500">
          No widgets added. Please use the modal to add widgets.
        </p>
      ) : (
        Object.entries(groupedWidgets).map(([category, widgetList]) => (
          <div key={category} className="mb-8">
            <h5 className="text-lg font-semibold mb-3 uppercase">{category}</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {widgetList.map((widget, idx) => (
                <WidgetCard
                  key={`${category}-${idx}`}
                  title={widget.title}
                  category={widget.category}
                />
              ))}
            </div>
          </div>
        ))
      )}

      <AddWidgetModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;
