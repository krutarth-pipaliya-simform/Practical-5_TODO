import { RadioSelection } from "./RadioSelection";

export const Main = () => {
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
        <main className="p-4">
            <RadioSelection {...RadioProps}></RadioSelection>
        </main>
    );
};
