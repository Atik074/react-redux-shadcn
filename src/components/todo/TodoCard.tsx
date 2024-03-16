import { Button } from "../ui/button";
import DeleteIcon from "../ui/icons/DeleteIcon";
import EditIcon from "../ui/icons/EditIcon";
import { useUpdateTodoMutation } from "@/redux/api/api";


export type TTodoCardProps= {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};




const TodoCard = ({ _id ,title, description, priority, isCompleted }:TTodoCardProps) => {

  const [updateTodo , {isLoading}] = useUpdateTodoMutation()


  if(isLoading){
    <p>Loading...</p>
  }


  const toggleState = () => {
      // const taskData ={
      //   title, 
      //   description,
      //    priority, 
      //   isCompleted:!isCompleted 
      
      // }

      const options ={
        id:_id ,
        data:{
          title, 
          description,
           priority, 
          isCompleted:!isCompleted 
        }
        
      }

      updateTodo(options)

  };

  return (
    <div>
      <div className="bg-white flex justify-between items-center p-3  rounded-md border ">
        <input
          className="mr-3"
          onChange={toggleState }
          type="checkbox"
         defaultChecked={isCompleted}
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
