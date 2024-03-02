import { TTodo, removeTodo, toggleCompleted } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import DeleteIcon from "../ui/icons/DeleteIcon";
import EditIcon from "../ui/icons/EditIcon";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ id, title, description, isCompleted }: TTodo) => {
  const dispath = useAppDispatch();

  const toggleState = ()=>{
       dispath(toggleCompleted(id))
  }

  return (
    <div>
      <div className="bg-white flex justify-between items-center p-3  rounded-md border ">
        <input 
        onChange={toggleState}
        type="checkbox" name="" id="" />
        <p className="text-xl">{title}</p>
        <div>
          {isCompleted ? (
            <p className="text-green-500 text-xl">Done</p>
          ) : (
            <p className="text-red-500 text-xl">pending</p>
          )}
        </div>
        <p className="text-xl">{description}</p>
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
