import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch} from "@/redux/hook";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";

export const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispath = useAppDispatch();
  // const formRef = useRef<HTMLFormElement>(null);

 
  const handlleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(36).substring(2,7)
    const taskDetails = {
        id:randomString ,
        title: task,
       description: description,
     
    };
    
  
    dispath(addTodo(taskDetails));

    // if (formRef.current) {
    //   formRef.current.reset();
    // }

     
    

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" bg-primary-gradient" variant="outline">
          Add Modal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form    onSubmit={handlleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              onBlur={(e) => setTask(e.target.value)}
              id="name"
              name="name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="desc" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              id='desc'
              name="description"
              className="col-span-3"
            />
          </div>
          <Button type="submit" variant="ghost">
            submit
          </Button>
        </form>
     
      </DialogContent>
    </Dialog>
  );
};
