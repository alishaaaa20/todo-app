import TodoForm from "../components/Todo/TodoForm";

export default function Home() {
  return (
    <main className="mx-auto justify-center  max-w-xl mt-20">
      <div>
        <h1 className="font-bold text-xl text-center mb-10 text-white">
          TODO APP
        </h1>
        <TodoForm />
      </div>
    </main>
  );
}
