"use client";

import { ChevronLeft, ChevronDown, Check } from "lucide-react";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

// Custom Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
  }
>(({ className, variant = "default", size = "default", ...props }, ref) => {
  let variantClass = "";
  if (variant === "default") {
    variantClass = "bg-primary text-primary-foreground shadow hover:bg-primary/90";
  } else if (variant === "outline") {
    variantClass = "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
  } else if (variant === "ghost") {
    variantClass = "hover:bg-accent hover:text-accent-foreground";
  } else {
    variantClass = "text-primary underline-offset-4 hover:underline";
  }

  let sizeClass = "";
  if (size === "default") {
    sizeClass = "h-9 px-4 py-2";
  } else if (size === "sm") {
    sizeClass = "h-8 rounded-md px-3 text-xs";
  } else if (size === "lg") {
    sizeClass = "h-10 rounded-md px-8";
  } else {
    sizeClass = "h-9 w-9";
  }

  const buttonClasses = [
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variantClass,
    sizeClass,
    className || ""
  ].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClasses}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

// Custom DropdownMenu components
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
  const contentClasses = [
    "z-50 min-w-[10rem] overflow-hidden rounded-md border bg-white shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
    className || ""
  ].filter(Boolean).join(" ");

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={contentClasses}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
});
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    active?: boolean;
  }
>(({ className, inset, active, ...props }, ref) => {
  const itemClasses = [
    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    inset ? "pl-8" : "",
    active ? "bg-gray-100 text-gray-900" : "",
    className || ""
  ].filter(Boolean).join(" ");

  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={itemClasses}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

interface Sensor {
  id: number;
  name: string;
  firePercentage: string;
  camera: string;
  temp: string;
  humidity: string;
  airQuality: string;
  gas: string;
  gps: string;
  data: string;
}

interface AnalyticsTableProps {
  sensors?: Sensor[];
  title?: string;
  onBack?: () => void;
  onFilterChange?: (filter: string) => void;
}

// Component for the analytics table
function AnalyticsTable({ sensors = [], title = "Analytics", onBack, onFilterChange }: AnalyticsTableProps) {
  // Default data if none provided
  const defaultSensors: Sensor[] = [
    {
      id: 1,
      name: "Azure sensor #1",
      firePercentage: "32%",
      camera: "Active",
      temp: "12°C",
      humidity: "45%",
      airQuality: "Good",
      gas: "Low",
      gps: "10 min",
      data: "3 min",
    },
    {
      id: 2,
      name: "Golden Meadow #2",
      firePercentage: "44%",
      camera: "Inactive",
      temp: "15°C",
      humidity: "50%",
      airQuality: "Moderate",
      gas: "Medium",
      gps: "3 min",
      data: "1 min",
    },
    // Add more default sensors as needed
  ];

  const displaySensors = sensors.length > 0 ? sensors : defaultSensors;

  const [filter, setFilter] = React.useState<"all" | "active" | "inactive">("all");

  const filteredSensors = displaySensors.filter((sensor) => {
    if (filter === "active") {
      return sensor.camera === "Active";
    } else if (filter === "inactive") {
      return sensor.camera === "Inactive";
    }
    return true; // Show all sensors
  });

  const handleFilterChange = (filter: string) => {
    setFilter(filter as "all" | "active" | "inactive");
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
        {/* Analytics header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            {onBack && (
              <button className="text-gray-500 mr-2" onClick={onBack} aria-label="Go back">
                <ChevronLeft size={20} />
              </button>
            )}
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {filter === "all" ? "All sensors" : filter === "active" ? "Active sensors" : "Non-active sensors"}
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => handleFilterChange("all")}
                active={filter === "all"}
              >
                All sensors
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleFilterChange("active")}
                active={filter === "active"}
              >
                Active sensors
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleFilterChange("inactive")}
                active={filter === "inactive"}
              >
                Non-active sensors
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-left text-sm text-gray-500">
                <th className="px-4 py-3 font-medium">Sensor Name</th>
                <th className="px-4 py-3 font-medium">Fire %</th>
                <th className="px-4 py-3 font-medium">Camera</th>
                <th className="px-4 py-3 font-medium">Temp</th>
                <th className="px-4 py-3 font-medium">Humidity</th>
                <th className="px-4 py-3 font-medium">Air Quality</th>
                <th className="px-4 py-3 font-medium">Gas</th>
                <th className="px-4 py-3 font-medium">GPS</th>
                <th className="px-4 py-3 font-medium">Data</th>
              </tr>
            </thead>
            <tbody>
              {filteredSensors.map((sensor) => (
                <tr key={sensor.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium">{sensor.name}</td>
                  <td className="px-4 py-4">
                    <span
                      className={Number.parseInt(sensor.firePercentage) > 60 ? "text-red-600" : Number.parseInt(sensor.firePercentage) > 40 ? "text-orange-500" : "text-green-500"}
                    >
                      {sensor.firePercentage}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {sensor.camera === "Active" ? (
                      <Check className="text-green-500" size={18} />
                    ) : (
                      <span className="text-red-500">Inactive</span>
                    )}
                  </td>
                  <td className="px-4 py-4">{sensor.temp}</td>
                  <td className="px-4 py-4">{sensor.humidity}</td>
                  <td className="px-4 py-4">{sensor.airQuality}</td>
                  <td className="px-4 py-4">{sensor.gas}</td>
                  <td className="px-4 py-4">{sensor.gps}</td>
                  <td className="px-4 py-4">{sensor.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Create the actual Next.js page component
export default function AnalyticsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Wildfire Analytics Dashboard</h1>
      <AnalyticsTable />
    </div>
  );
}
