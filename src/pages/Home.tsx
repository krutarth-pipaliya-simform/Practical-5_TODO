import { Form } from "@/components/form/Form";
import { Main } from "@/components/Main";
import { useMyReducer } from "@/hooks/useMyReducer";

export const Home = () => {
    const [todos, dispatch] = useMyReducer();
    const formProps = {
        fields: [
            {
                name: "todo",
                placeholder: "Enter a Todo",
                type: "text",
            },
        ],
        formAction: (formData: FormData) => {
            dispatch({
                type: "ADD",
                todo: {
                    id: crypto.randomUUID(),
                    isComplete: false,
                    timeCreated: new Date().toDateString(),
                    title: String(formData.get("todo")),
                },
            });
        },
        buttonText: "Create Todo",
    };
    return (
        <>
            <header className="p-4">
                <Form className="flex gap-4" {...formProps}></Form>
            </header>
            <Main todos={todos} dispatch={dispatch}></Main>
        </>
    );
};
