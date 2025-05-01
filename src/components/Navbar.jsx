import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Menu, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddWidgetModal from "@/components/AddWidgetModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Breadcrumb */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Right: Search and Add Widget */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="text"
              placeholder="Search anything..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Mobile search and Add Widget */}
      {mobileOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <Input
            type="text"
            placeholder="Search widgets..."
            className="w-full"
          />
          <Button className="w-full" onClick={() => setModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Widget
          </Button>
        </div>
      )}
      <AddWidgetModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
}
