"use client";

import { useState, useEffect } from "react";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash, Check } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface Task {
  id: number;
  title: string;
}

const TodoForm: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [successfulTasks, setSuccessfulTasks] = useState<Task[]>([]);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  const { toast } = useToast();

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
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const confirmDeleteTask = () => {
    if (taskToDelete) {
      handleDeleteTask(taskToDelete.id);
      setTaskToDelete(null);
    }
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  const openEditDialog = (task: Task) => {
    setTaskToEdit(task);
    setEditTaskTitle(task.title);
  };

  const handleEditTask = () => {
    if (taskToEdit && editTaskTitle.trim()) {
      const updatedTasks = tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, title: editTaskTitle } : task
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
      setEditTaskTitle("");
    }
  };

  const handleCompleteTask = (task: Task) => {
    setSuccessfulTasks((prev) => [...prev, task]);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));

    console.log("Task completed:", task.title);

    toast({
      description: "Your task is successfully completed.",
    });
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
                <Button
                  variant="outline"
                  className="p-2 text-sm"
                  onClick={() => openEditDialog(task)}
                >
                  <Pencil />
                </Button>

                {/* Dialog for editing task */}
                {taskToEdit && taskToEdit.id === task.id && (
                  <Dialog open={true} onOpenChange={() => setTaskToEdit(null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Task</DialogTitle>
                        <DialogDescription>
                          Make changes to your task here. Click save when you're
                          done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-task" className="text-right">
                            Task
                          </Label>
                          <Input
                            id="edit-task"
                            value={editTaskTitle}
                            onChange={(e) => setEditTaskTitle(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button onClick={handleEditTask}>Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Button for completing a task */}
                <Button
                  variant="outline"
                  className="p-2 text-sm border-green-500 text-green-500 hover:bg-green-100"
                  onClick={() => handleCompleteTask(task)}
                >
                  <Check />
                </Button>

                {/* Dialog for deleting task */}
                <Dialog>
                  <DialogTrigger>
                    <Button
                      variant="destructive"
                      className="p-2 text-sm"
                      onClick={() => setTaskToDelete(task)}
                    >
                      <Trash />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Are you sure you want to delete this task?
                      </DialogTitle>
                      <DialogDescription>
                        This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="destructive" onClick={confirmDeleteTask}>
                        Confirm
                      </Button>
                      <Button variant="outline" onClick={handleCancelDelete}>
                        Cancel
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}

      {/* Displaying the list of successful tasks */}
      <div>
        <h3 className="mt-10 text-xl font-semibold">Successful tasks:</h3>
        {successfulTasks.map((task) => (
          <Card key={task.id} className="w-full mt-5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-normal text-xl 	text-decoration-line: line-through">
                  {task.title}
                </CardTitle>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TodoForm;
