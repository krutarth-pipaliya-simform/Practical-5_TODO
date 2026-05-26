import { RadioGroupField, type RadioGroupProps } from "./RadioGroupField";
import { RadioGroup } from "./ui/radio-group";

export const RadioSelection = ({
    RadioGroupFieldArray,
}: {
    RadioGroupFieldArray: RadioGroupProps[];
}) => {
    return (
        <>
            <RadioGroup className="flex">
                {RadioGroupFieldArray.map((field) => {
                    return <RadioGroupField {...field}></RadioGroupField>;
                })}
            </RadioGroup>
        </>
    );
};
