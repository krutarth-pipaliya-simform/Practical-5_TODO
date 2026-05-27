import { RadioGroupField, type RadioGroupProps } from "./RadioGroupField";
import { RadioGroup } from "./ui/radio-group";

export const RadioSelection = ({
    RadioGroupFieldArray,
}: {
    RadioGroupFieldArray: RadioGroupProps[];
}) => {
    return (
        <>
            <RadioGroup className="flex p-4">
                {RadioGroupFieldArray.map((field) => {
                    return <RadioGroupField key={field.label} {...field}></RadioGroupField>;
                })}
            </RadioGroup>
        </>
    );
};
