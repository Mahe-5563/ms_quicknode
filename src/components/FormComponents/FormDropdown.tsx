import { useState } from "react";

export default function FormDropdown(props: any) {
  {/** TODO: While working on this file, structure the props based on TypeScript rules. */}
  const {
    dropdown_values, // Mandatory | Structure =>{ id: "1", label: "Hello World", value: "Hello World" } (Additional keys can be given. label, value and id are mandatory)
    onChange, // Mandatory
    label, // Mandatory
    div_class,
    label_class,
    input_class,
    error_message,
  } = props;

  const [dropdown_toggle, setDropdownToggle] = useState<boolean>(false);
  const [selected_value, setselectedValue] = useState<string>("");

  return (
    <>
      <div className={`flex flex-col my-2 relative ${div_class}`}>
        <label className={`${label_class}`}>{label || "Input Label"}</label>
        {/* TODO: Change the button. import CTAButton component before working with the button */}
        <button
          className={`text-white mt-2 bg-[#ffffff20] hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between ${input_class}`}
          type="button"
          onClick={() => setDropdownToggle(!dropdown_toggle)}
        >
          {selected_value || label || "Select your value"}
        </button>

        {dropdown_toggle && (
          <div className="z-10 absolute w-full top-20 bg-white rounded-lg shadow mt-2 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {dropdown_values?.map((item: {id: string, label: string, value: string}) => 
                <li
                  className="p-2 hover:bg-gray-600"
                  id={`dropdown_${item.id}`}
                  key={`dropdown_${item.value}`}
                  onClick={() => {
                    setselectedValue(item.label);
                    onChange(item.value);
                  }}
                >
                  {item.label}
                </li>
              )}
            </ul>
          </div>
        )}

        {error_message && <span className="text-sm text-red-500">{error_message}</span>}
      </div>
    </>
  );
}
