import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const {todos} = useAppSelector((state)=>state.todos)


  return (
    <div>
      <div className="mb-6 flex justify-between m-2">
        <AddTodoModal/>
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full  rounded-md p-[5px]">
      
        <div className="bg-white space-y-5 rounded-lg w-full h-full p-5">
          {
            todos.map((item)=>(
              <TodoCard 
                key={item.id}
                {...item}
                 />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
