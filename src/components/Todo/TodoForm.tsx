"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import  TodoDialog  from "../Todo/TodoDialog";
import { buttonVariants } from "@/components/ui/button";

const TodoForm: React.FC = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="add" placeholder="Add a new task" />
        <Button type="submit">Add</Button>
      </div>
      <Card className="p-5 mt-10">
        <CardHeader>
          <CardTitle>Task Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Task Content</p>
        </CardContent>
        <div>
          <Button
            className="flex w-full max-w-sm items-center space-x-2"
            variant="outline"
          >
            Edit
          </Button>
        </div>
        <div className="mt-3">
          <Button
            className="flex w-full max-w-sm items-center space-x-2"
            variant="outline"
          >
            Delete
          </Button>
        </div>
      </Card>
    </>
  );
};

export default TodoForm;
