import { TTodo, removeTodo, toggleCompleted } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import DeleteIcon from "../ui/icons/DeleteIcon";
import EditIcon from "../ui/icons/EditIcon";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ id, title, description, priority, isCompleted }: TTodo) => {
  const dispath = useAppDispatch();

  const toggleState = () => {
    dispath(toggleCompleted(id));
  };

  return (
    <div>
      <div className="bg-white flex justify-between items-center p-3  rounded-md border ">
        <input
          className="mr-3"
          onChange={toggleState}
          type="checkbox"
          name=""
          id=""
        />
        <p className="text-xl flex-[2]">{title}</p>

        <div className="flex-1 flex justify-center items-center gap-2">
          <div
            className={`
          size-3  flex justify-center rounded-full mr-2
          ${priority === "high" ? "bg-red-600" : null}
          ${priority === "medium" ? "bg-yellow-600" : null}
          ${priority === "low" ? "bg-green-600" : null}
          
          `}
          >
            {" "}
          </div>

          <p className="text-xl flex-1">{priority}</p>
        </div>

        <div className="flex-1">
          {isCompleted ? (
            <p className="text-green-500 text-xl">Done</p>
          ) : (
            <p className="text-red-500 text-xl">pending</p>
          )}
        </div>
        <p className="text-xl flex-[2]">{description}</p>
        <div className="space-x-5">
          <Button
            onClick={() => dispath(removeTodo(id))}
            className="bg-red-800  text-lg"
          >
            <DeleteIcon />
          </Button>
          <Button className="bg-[#281f7bd2] text-lg">
            <EditIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
