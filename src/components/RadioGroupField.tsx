import { useId } from "react";
import { Label } from "./ui/label";
import { RadioGroupItem } from "./ui/radio-group";
export interface RadioGroupProps {
    label: string;
    value: string;
}

export const RadioGroupField = ({ label, value }: RadioGroupProps) => {
    const id = useId();
    return (
        <div className="flex items-center gap-3">
            <RadioGroupItem className="cursor-pointer" id={id} value={value} />
            <Label className="cursor-pointer" htmlFor={id}>
                {label}
            </Label>
        </div>
    );
};
