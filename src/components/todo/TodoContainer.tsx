import { useGetTodosQuery } from "@/redux/api/api";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";

const TodoContainer = () => {
  const [priority , setPriority] = useState("")
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);



  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    console.log("error is ", isError);
  }

  return (
    <div>
      <div className="mb-6 flex justify-between m-2">
        <AddTodoModal />
        <TodoFilter
         priority={priority}
         setPriority={setPriority}
         />
      
      </div>
      <div className="bg-primary-gradient w-full h-full  rounded-md p-[5px]">
        <div className="bg-white space-y-5 rounded-lg w-full h-full p-5">
          {todos?.map((item) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
