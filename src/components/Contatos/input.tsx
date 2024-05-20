
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputGenericProps {
  label: string
  onchange: React.ChangeEventHandler<HTMLInputElement>;
  value: string
  placeholder: string
}


const InputGeneric = ({ label, onchange, value, placeholder }: InputGenericProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Label className="text">{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        className="rounded focus-visible:ring-1 focus-visible:ring-primary border-primary "
        onChange={onchange}

      />
    </div>

  );
}

export default InputGeneric;