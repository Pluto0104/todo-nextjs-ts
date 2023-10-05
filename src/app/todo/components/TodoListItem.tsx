import React from "react";
import Button from "@/components/Button";
import clsx from "clsx";

interface TodoListItemProps {
  id?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  onCompleted?: (id: string, isCompleted: boolean) => void;
  onDelete?: (id: string) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  id = "New Todo",
  title = "New Todo",
  description = "New Todo Description",
  isCompleted = false,
  onCompleted,
  onDelete,
}) => {
  const [isChecked, setIsChecked] = React.useState(isCompleted);

  const handleDelete = () => {
    onDelete && onDelete(id);
  };

  const handleChecked: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);
    onCompleted && onCompleted(id, e.target.checked);
  };

  return (
    <div className="flex items-center justify-between mb-2 p-2 bg-green-700 hover:bg-green-600 rounded-md transition duration-150 ease-in-out">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          className="form-checkbox rounded-full h-5 w-5 text-indigo-600 transition duration-150 ease-in-out bg-red-500 focus:outline-none focus:shadow-outline-red"
        />
        <div className="ml-2">
          <p className={clsx("text-white-800", { "line-through": isChecked })}>
            {title}
          </p>
          <p
            className={clsx("text-sm text-white-500", {
              "line-through": isChecked,
            })}
          >
            {description}
          </p>
        </div>
      </div>
      <div>
        <Button color="success" href={`/todo/${id}`} className="mr-2">
          Edit
        </Button>
        {onDelete && (
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
