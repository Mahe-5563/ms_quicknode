'use client';

type FormButtonProps = {
  onClick: React.MouseEventHandler, 
  cta_theme: string, 
  cta_title: string,
};

export default function FormButton({onClick, cta_theme, cta_title}: FormButtonProps) {
  const primary_CTA: string = "#9854cb";
  const secondary_CTA: string = "#000212";

  let cta_Theme: string;

  switch (cta_theme) {
    case "prim":
        cta_Theme = primary_CTA;
      break;
    case "sec":
        cta_Theme = secondary_CTA;
      break;
    default:
      // This is for temporary action. If there is another color code to introduce for default buttons, please give it here.
      cta_Theme = primary_CTA;
      break;
  }

  return (
    <>
      <button
        className={`bg-[${cta_Theme}] ${cta_theme == "sec" && "border"} px-5 py-2 rounded`}
        onClick={onClick}
      >
        {cta_title}
      </button>
    </>
  );
}
