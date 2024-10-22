'use client';

import { useState, useEffect } from 'react';
import { Button } from '@mui/base';

import { CTAButtonProps } from '@/interfaces';
import { getAccentCode, hoverHandler, loadAccentClass } from '@/operations/common';

export default function CTAButton({
  id, //mandatory
  btn_label,
  onClick, // mandatory
  btn_type, // mandatory
  btn_class,
  icon,
  disabled,
  icon_after,
  props,
  is_submitting = false,
}: CTAButtonProps) {
  const [btnTypeClass, setBtnTypeClass] = useState<string>('');
  const [btnTypeProperty, setBtnTypeProperty] = useState<string>('');
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
  }, []);

  useEffect(() => {
    // setBtnTypeClass('');
    setBtnType();
  }, [theme_accent_present]);

  const setBtnType = () => {
    if (disabled) {
      setBtnTypeClass('!bg-zinc-300 !text-zinc-700 dark:!bg-zinc-500');
      setBtnTypeProperty('');
    } else {
      switch (btn_type) {
        case 'primary':
          setBtnTypeClass('');
          setBtnTypeProperty(getAccentCode(theme_accent_present));
          break;
        case 'secondary':
          // Give a proper secondary color
          setBtnTypeClass('');
          setBtnTypeProperty('#8765CC'); // Accent
          break;
        case 'warning':
          setBtnTypeClass('');
          setBtnTypeProperty('#F59E0B'); // Amber - 500
          break;
        case 'success':
          setBtnTypeClass('');
          setBtnTypeProperty('#22C55E'); // Green - 500
          break;
        case 'danger':
          setBtnTypeClass('');
          setBtnTypeProperty('#EF4444'); // Red - 500
          break;
        case 'white':
          setBtnTypeClass(`border border-black`);
          setBtnTypeProperty('#FFFFFF');
          break;
        case 'item':
          setBtnTypeClass('!text-accent');
          setBtnTypeProperty('');
          break;
        case 'transp':
          setBtnTypeClass(`
            bg-transparent 
            dark:text-white 
            ${id != 'page_go_back' && id != 'page_go_forward' && !is_submitting && 'border border-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-500'}
          `);
          setBtnTypeProperty('');
          break;
        default:
          // Give a proper default color.
          setBtnTypeProperty('#8765CC'); // Accent
          break;
      }
    }
  };
  return (
    <Button
      // type='submit'
      {...props}
      id={id}
      onClick={onClick}
      className={`text-sm px-6 py-2 text-black rounded-md items-center 
          ${icon && 'flex gap-2'} 
          ${disabled && btn_type != 'transp' && 'Mui-disabled'} 
          ${btnTypeClass} 
          ${btn_class}
        `}
      disabled={disabled}
      style={{
        backgroundColor: !disabled ? btnTypeProperty : 'inherit',
      }}
      onMouseOver={() =>
        !is_submitting && btnTypeProperty && hoverHandler(id, btnTypeProperty, 'mouse_over')
      }
      onMouseOut={() => btnTypeProperty && hoverHandler(id, btnTypeProperty, 'mouse_out')}
    >
      {!icon_after && icon} {btn_label} {icon_after && icon}
    </Button>
  );
}
