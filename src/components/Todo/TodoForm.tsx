"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoForm: React.FC = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Add a new task" />
        <Button type="submit">Add</Button>
      </div>
      <div>
        <h3 className="mt-10 text-xl font-semibold">Task to do - </h3>
      </div>
      <Card className="p-5 mt-5">
        <CardHeader>
          <CardTitle>Task Title</CardTitle>
        </CardHeader>
        <div className="flex items-center justify-between">
          <CardContent>
            <p>Task Content</p>
          </CardContent>
          <div className="flex space-x-2">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TodoForm;
