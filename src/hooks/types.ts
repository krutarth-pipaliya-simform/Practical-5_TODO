import type { TodoType } from "@/components/Todo";

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
