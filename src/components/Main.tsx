import { RadioSelection } from "./RadioSelection";
import { Todo, type TodoType } from "./Todo";

export const Main = () => {
    const Todos: TodoType[] = [
        {
            id: "1",
            title: "Learn React",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "2",
            title: "Build Todo App",
            timeCreated: new Date().toISOString(),
            isComplete: true,
        },
        {
            id: "3",
            title: "Practice TypeScript",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "1",
            title: "Learn React",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "2",
            title: "Build Todo App",
            timeCreated: new Date().toISOString(),
            isComplete: true,
        },
        {
            id: "3",
            title: "Practice TypeScript",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "1",
            title: "Learn React",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "2",
            title: "Build Todo App",
            timeCreated: new Date().toISOString(),
            isComplete: true,
        },
        {
            id: "3",
            title: "Practice TypeScript",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "1",
            title: "Learn React",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
        {
            id: "2",
            title: "Build Todo App",
            timeCreated: new Date().toISOString(),
            isComplete: true,
        },
        {
            id: "3",
            title: "Practice TypeScriptggfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            timeCreated: new Date().toISOString(),
            isComplete: false,
        },
    ];
    const RadioProps = {
        RadioGroupFieldArray: [
            {
                label: "All",
                value: "All",
            },
            {
                label: "Completed",
                value: "Completed",
            },
            {
                label: "Incomplete",
                value: "Incomplete",
            },
        ],
    };

    return (
        <main className="p-4 flex flex-col flex-1 overflow-hidden">
            <RadioSelection {...RadioProps}></RadioSelection>
            <ul className="flex-1 pt-4 overflow-y-auto ">
                {Todos.map((todo) => (
                    <li>
                        <Todo {...todo}></Todo>
                    </li>
                ))}
            </ul>
        </main>
    );
};
