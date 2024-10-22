import { FormTextAreaProps } from '@/interfaces';

export default function FormDescription({ 
  label,
  placeholder,
  div_class,
  label_class,
  input_class,
  error_message,
  mandatory,
  onChange, 
  onBlur, 
  value
  }: FormTextAreaProps) {
  return (
    <>
      <div className={`flex my-2 ${div_class}`}>
        {label && (
          <label className={`${label_class} w-1/5 text-sm mr-4`}>
            {label || "Description"}
            {mandatory && <label className="text-sm text-red-500">*</label>}
          </label>
        )}
        <div className="flex flex-col w-4/5">
          <textarea
            rows={4}
            cols={10}
            className={`p-2 text-sm rounded-md border bg-[#FAFBFC] dark:bg-[#2F2F2F] dark:border-gray-500 ${input_class} ${error_message && 'border-red-500'}`}
            onChange={onChange}
            placeholder={placeholder || 'Enter your text here'}
            onBlur={onBlur}
            value={value}
          />
          {error_message && <span className="text-sm text-red-500 mt-2">{error_message}</span>}
        </div>
      </div>
    </>
  );
}
