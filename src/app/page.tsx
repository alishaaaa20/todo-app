import TodoForm from "../components/Todo/TodoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <div>
        <h1 className="font-bold text-xl text-center mb-10 text-white">
          TODO APP
        </h1>
        <TodoForm />
      </div>
    </main>
  );
}
