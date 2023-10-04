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
    <nav className="w-full rounded-md my-2" aria-label="Breadcrumb">
      <ol className="list-reset flex">
        {items.map(({ icon, href, text }, index) => (
          <li key={`breadcrumb-item-${index}`} className="flex items-center">
            {icon && <span className="mr-1">{icon}</span>}
            {href ? (
              <Button
                href={href}
                className="text-white transition duration-150 ease-in-out hover:text-blue-600 focus:text-blue-600 active:text-blue-700"
              >
                {text}
              </Button>
            ) : (
              <span className="px-2 text-neutral-500 dark:text-neutral-400">
                {text}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-neutral-500 dark:text-neutral-400">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
