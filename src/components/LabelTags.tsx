'use client';

type LabelTagsProps = {
  bg_color: string;
  txt_color: string;
  label: string;
  label_class?: string;
};

export const LabelTags = ({ 
  bg_color, 
  label, 
  txt_color, 
  label_class 
}: LabelTagsProps) => 
  <label 
    className={`text-xs px-2 py-1 rounded-md ${label_class}`}
    style={{
      backgroundColor: bg_color,
      color: txt_color
    }}
  >
    {label}
  </label>
