import React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}

export const Tabs = ({ defaultValue, children, className = '' }: TabsProps) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className={className}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList = ({ children }: TabsListProps) => {
  return (
    <div className="flex space-x-2 mb-4">
      {children}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }: TabsTriggerProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${
        activeTab === value
          ? 'bg-orange-500 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  activeTab?: string;
}

export const TabsContent = ({ value, children, activeTab }: TabsContentProps) => {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
};