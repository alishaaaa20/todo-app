import Image from "next/image";
import TodoForm from "../components/Todo/TodoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>TODO App</h1>
        <TodoForm />
      </div>
    </main>
  );
}
