import type { TodoType } from "@/components/Todo";
import { useReducer } from "react";

export type ActionType =
    | {
          type: "ADD";
          todo: TodoType;
      }
    | {
          type: "DELETE";
          todoId: string;
      }
    | {
          type: "UPDATE";
          todo: TodoType;
          todoId: string;
      };

export const useMyReducer = () => {
    let todos = localStorage.getItem("todos");

    if (todos === null) {
        localStorage.setItem("todos", JSON.stringify([]));
        todos = JSON.stringify([]);
    }

    const parsedTodos = JSON.parse(todos);

    if (!(parsedTodos instanceof Array)) {
        throw new Error("Localstorage has tempered data");
    }

    return useReducer(reducer, ValidTodos(parsedTodos));
};

const reducer = (prevState: TodoType[], action: ActionType) => {
    let returnArray;

    switch (action.type) {
        case "ADD":
            returnArray = [...prevState, action.todo];
            break;

        case "DELETE":
            returnArray = prevState.filter((todo) => todo.id !== action.todoId);
            break;

        case "UPDATE":
            returnArray = prevState.map((todo) => (todo.id !== action.todoId ? todo : action.todo));
            break;

        default:
            throw new Error("Please use proper Action");
    }

    returnArray = ValidTodos(returnArray);
    localStorage.setItem("todos", JSON.stringify(returnArray));

    return returnArray;
};

function ValidTodos(todos: TodoType[]) {
    const today = new Date();

    return todos.filter(({ timeCreated }) => {
        const dateCreated = new Date(timeCreated);

        return (
            dateCreated.getDate() === today.getDate() &&
            dateCreated.getMonth() === today.getMonth() &&
            dateCreated.getFullYear() === today.getFullYear()
        );
    });
}
