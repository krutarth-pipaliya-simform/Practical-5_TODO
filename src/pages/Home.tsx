import { Form } from "@/components/form/Form";

export const Home = () => {
    const formProps = {
        fields: [
            {
                name: "todo",
                placeholder: "Enter a Todo",
                type: "text",
            },
        ],
        formAction: (formData: FormData) => {
            console.log(formData);
        },
        buttonText: "Create Todo",
    };
    return (
        <>
            <header className="p-4">
                <Form className="flex gap-4" {...formProps}></Form>
            </header>
        </>
    );
};
