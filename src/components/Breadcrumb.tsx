import React from "react";
import Button from "./Button";

export interface BreadcrumbItem {
  href?: string;
  icon?: React.ReactNode;
  text: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex my-2" aria-label="Breadcrumb">
      {items.map(({ icon, href, text }, index) => (
        <div key={`breadcrumb-item-${index}`} className="flex items-center">
          {icon && <span className="mr-1">{icon}</span>}
          {href ? (
            <Button href={href} className="hover:underline">
              {text}
            </Button>
          ) : (
            <span className="py-2 px-4">{text}</span>
          )}
          {index < items.length - 1 && <span className="mx-1">/</span>}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
