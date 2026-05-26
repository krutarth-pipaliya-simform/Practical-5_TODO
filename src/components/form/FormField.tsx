import { useId, type HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export interface FormFieldType {
    label?: string;
    name: string;
    placeholder?: string;
    type: HTMLInputTypeAttribute;
}

export const FormField = ({ label, type, name, placeholder }: FormFieldType) => {
    const id = useId();
    return (
        <div className="flex-1">
            {label && <Label htmlFor={id}>{label}</Label>}
            <Input className="flex-1" id={id} type={type} name={name} placeholder={placeholder} />
        </div>
    );
};
