"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Skeleton } from "@/components/ui/skeleton";

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
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Function to handle adding a new task
  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskTitle.trim()) {
      setIsLoading(true);
      const newTask: Task = {
        id: Date.now(),
        title: taskTitle,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setTaskTitle("");
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  // Function to handle editing a task
  const handleEditTask = () => {
    if (taskToEdit && editTaskTitle.trim()) {
      setIsLoading(true);
      const updatedTasks = tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, title: editTaskTitle } : task
      );
      setTasks(updatedTasks);
      setTaskToEdit(null);
      setEditTaskTitle("");
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  // Function to handle completing a task
  const handleCompleteTask = (task: Task) => {
    setIsLoading(true);
    setSuccessfulTasks((prev) => [...prev, task]);
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
    setTimeout(() => setIsLoading(false), 1000);
    toast({
      description: "Your task is successfully completed.",
    });
  };

  // Function to handle deleting a task
  const handleDeleteTask = (id: number) => {
    setIsLoading(true);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setTimeout(() => setIsLoading(false), 1000);
  };

  // Function to confirm task deletion
  const confirmDeleteTask = () => {
    if (taskToDelete) {
      handleDeleteTask(taskToDelete.id);
      setTaskToDelete(null);
    }
  };

  // Function to cancel task deletion
  const handleCancelDelete = () => {
    setTaskToDelete(null);
  };

  // Function to open the edit dialog
  const openEditDialog = (task: Task) => {
    setTaskToEdit(task);
    setEditTaskTitle(task.title);
  };

  return (
    <div>
      {/* Form for adding a new task */}
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

      {/* displaying tasks to do */}
      <div>
        <h3 className="mt-10 text-xl font-semibold">
          Tasks to do: {tasks.length}
        </h3>
        {/* Conditionally render skeleton */}
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          // Render tasks list when not showing skeleton
          tasks.map((task) => (
            <Card key={task.id} className="mt-5 max-w-sm items-center">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-normal text-xl">
                    {task.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    {/* Edit task button */}
                    <Button
                      variant="outline"
                      className="p-2 text-sm"
                      onClick={() => openEditDialog(task)}
                    >
                      <Pencil />
                    </Button>

                    {/* Dialog for editing task */}
                    {taskToEdit && taskToEdit.id === task.id && (
                      <Dialog open onOpenChange={() => setTaskToEdit(null)}>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Task</DialogTitle>
                            <DialogDescription>
                              Make changes to your task here. Click save when
                              you're done.
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
                                onChange={(e) =>
                                  setEditTaskTitle(e.target.value)
                                }
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleEditTask}>
                              Save changes
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    )}

                    {/* Complete task button */}
                    <Button
                      variant="outline"
                      className="p-2 text-sm border-green-500 text-green-500 hover:bg-green-100"
                      onClick={() => handleCompleteTask(task)}
                    >
                      <Check />
                    </Button>

                    {/* Delete task button */}
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
                          <Button
                            variant="destructive"
                            onClick={confirmDeleteTask}
                          >
                            Confirm
                          </Button>
                          <Button
                            variant="outline"
                            onClick={handleCancelDelete}
                          >
                            Cancel
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>

      {/* Section for displaying successful tasks */}
      <div>
        <h3 className="mt-10 text-xl font-semibold">
          Successful tasks: {successfulTasks.length}
        </h3>
        {/* Conditionally render skeleton */}
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          // Render successful tasks list when not showing skeleton
          successfulTasks.map((task) => (
            <Card key={task.id} className="w-full mt-5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-normal text-xl line-through">
                    {task.title}
                  </CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoForm;
