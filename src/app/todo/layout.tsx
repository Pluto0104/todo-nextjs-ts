import Button from "@/components/Button";

const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="p-4">
      <nav className="mb-4 flex justify-between items-center">
        <Button href="/todo" className="text-2xl font-bold px-4">
          TODO
        </Button>
        <div>
          <Button href="/todo/add" className="mr-4">
            Add
          </Button>
          <Button href="/" color="error">
            Back
          </Button>
        </div>
      </nav>
      {children}
    </section>
  );
};

export default TodoLayout;
