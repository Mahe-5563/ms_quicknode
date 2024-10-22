import { FormInputProps } from "@/interfaces";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FormInput({
	type,
	onChange,
	label,
	placeholder,
	div_class,
	label_class,
	input_class,
	error_message,
	onBlur,
}: FormInputProps) {
	
	const [view_pwd, setView_pwd] = useState<boolean>(false);
	const container_class = "flex flex-col mt-3 mb-5";
	const input_field_class = "border p-2 rounded-md mt-1 bg-[#FAFBFC] text-sm dark:bg-[#2F2F2F] dark:border-gray-500"
	const error_field_class = "border !border-red-500";
  return (
    <>
      {type != 'password' ?
				<div className={`${container_class} ${div_class}`}>
					{label && <label className={`${label_class} text-sm`}>{label}</label>}
					<input
						type={type || "text"}
						className={`${input_field_class} ${error_message && error_field_class} focus:outline-none ${input_class} `}
						onChange={onChange}
						placeholder={placeholder || "Enter your text here"}
						onBlur={onBlur}
					/>
					{error_message && <span className="text-xs mt-1 text-red-500">{error_message}</span>}
				</div>
			:
			<div className={`${container_class} ${div_class}`}>
        {label && <label className={`${label_class} text-sm`}>
					{label} {label?.toLowerCase() == "password" && <label className="text-xs text-gray-500 mt-1.5">(Min. 8 characters)</label>}
				</label>}
        <section className={`flex justify-between ${input_field_class} ${error_message && error_field_class}`}>
					<input
						type={view_pwd ? "text" : "password"}
						className={`text-sm ${input_class} w-11/12 focus:outline-none bg-[#FAFBFC] dark:bg-[#2F2F2F] dark:border-gray-500`}
						onChange={onChange}
						placeholder={placeholder || "Enter your text here"}
						onBlur={onBlur}
					/>
					<FontAwesomeIcon icon={view_pwd ? faEyeSlash : faEye} size="xl" onClick={() => setView_pwd(!view_pwd)} className="w-1/12 my-auto" />
				</section>
				{error_message && <span className="text-xs mt-1 text-red-500">{error_message}</span>}
      </div>}
    </>
  );
}
