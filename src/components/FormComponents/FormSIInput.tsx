import { FormInputProps } from "@/interfaces";

export default function FormSIInput({
  type,
  onChange, // mandatory
  label,
  placeholder, // Mandatory
  div_class,
  label_class,
  input_class,
  error_message,
  onBlur,
  mandatory,
  value,
}: FormInputProps) {
  return (
    <>
      <div className={`flex ${div_class}`}>
        {label && 
          <label className={`${label_class} w-1/5 text-sm mr-4`}>
            {label}
            {mandatory && <label className="text-sm text-red-500">*</label>}
          </label>
        }
        <div className="flex flex-col w-4/5">
          <input
            type={type || 'text'}
            className={`border p-2 text-sm rounded-md bg-[#FAFBFC] ${input_class} dark:bg-[#2F2F2F] dark:border-gray-500 ${error_message && 'border-red-500'}`}
            onChange={onChange}
            placeholder={placeholder || 'Enter your text here'}
            onBlur={onBlur}
            value={value || ""}
          />
          {error_message && <span className="text-sm text-red-500 mt-2">{error_message}</span>}
        </div>
      </div>
    </>
  );
}
