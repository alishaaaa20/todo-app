"use client";

import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash } from "lucide-react";

const TodoForm: React.FC = () => {
  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Add a new task" />
        <Button type="submit">
          <Plus />
        </Button>
      </div>
      <div>
        <h3 className="mt-10 text-xl font-semibold">Task to do - </h3>
      </div>
      <Card className="w-full mt-5">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-normal text-xl">Task</CardTitle>
            <div className="flex space-x-2 pl-20">
              <Button variant="outline">
                <Pencil />
              </Button>
              <Button variant="destructive">
                <Trash />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>
    </>
  );
};

export default TodoForm;
