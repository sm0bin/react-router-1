import React from "react";
import { useLoaderData } from "react-router-dom";
import { HiCheckCircle, HiMinusCircle } from "react-icons/hi2";
import Headline from "./Headline";

const ToDo = () => {
  const todos = useLoaderData();

  return (
    <section className=" max-w-screen-2xl mx-6 md:mx-10 2xl:mx-auto text-center">
      <div className="text-lg leading-relaxed space-y-6 text-justify max-w-5xl 2xl:mx-auto">
        <Headline headline={`Total todos: ${todos.length}`}></Headline>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center gap-2 capitalize">
              {todo.completed ? (
                <HiCheckCircle className="text-green-500"></HiCheckCircle>
              ) : (
                <HiMinusCircle className="text-red-500"></HiMinusCircle>
              )}
              {todo.title}.
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ToDo;
