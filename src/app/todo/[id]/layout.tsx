import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

const breadcrumbItems: BreadcrumbItem[] = [
  { text: "Home", href: "/" },
  { text: "Todo", href: "/todo" },
  { text: "Todo Edit" },
];

const TodoEditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl ml-4">Todo Edit</h2>
      <Breadcrumb items={breadcrumbItems} />
      {children}
    </section>
  );
};

export default TodoEditLayout;
