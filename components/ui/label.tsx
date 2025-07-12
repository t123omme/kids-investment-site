import * as React from "react";

export const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {children}
    </label>
  );
};

