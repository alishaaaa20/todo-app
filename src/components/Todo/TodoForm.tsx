"use client";

import { useState } from "react";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash, Check } from "lucide-react";

interface Task {
  id: number;
  title: string;
}

const TodoForm: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: taskTitle,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
    }
  };
  const handleDeleteTask = (id: number) => {
    // Filter out the task with the given id
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <form
        onSubmit={handleAddTask}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="text"
          placeholder="Add a new task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <Button type="submit" className="p-2 text-sm">
          <Plus />
        </Button>
      </form>
      <div>
        <h3 className="mt-10 text-xl font-semibold">Tasks to do:</h3>
      </div>

      {tasks.map((task) => (
        <Card key={task.id} className="w-full mt-5">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-normal text-xl">
                {task.title}
              </CardTitle>
              <div className="flex space-x-2">
                <Button variant="outline" className="p-2 text-sm">
                  <Pencil />
                </Button>
                <Button
                  variant="outline"
                  className="p-2 text-sm border-green-500 text-green-500 hover:bg-green-100"
                >
                  <Check />
                </Button>
                <Button
                  variant="destructive"
                  className="p-2 text-sm"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <Trash />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default TodoForm;
