import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from '@mui/base';

import { theme_colors } from '@/data/common';
import FormSIInput from './FormComponents/FormSIInput';
import { checkValidColor } from '@/operations/common';
// import { loadAccentClass } from '@/operations/common';

export default function SelectTheme(props: any) {
  const { formDetails, setFormDetails, div_class, setFormErrors, formErrors } = props;
  const { theme } = useTheme();
  const [select_theme, setSelect_theme] = useState<any>('');
  const [custom_theme, setcustom_theme] = useState<string>('');

  const btn_class = 'rounded-full w-8 h-8 mr-2';
  const customThemeCheck = () =>
    custom_theme &&
    custom_theme.length == 7 &&
    custom_theme != '#000000' &&
    custom_theme != '#FFFFFF' &&
    checkValidColor(custom_theme);

  useEffect(() => {
    if (formDetails.theme_color) {
      if(theme_colors.filter(color => formDetails.theme_color == color.color_code).length == 0) {
        setcustom_theme(formDetails.theme_color);
      } else {
        setSelect_theme(formDetails.theme_color);
      }
    }
  }, [formDetails.theme_color]);

  useEffect(() => {
    if (select_theme) setFormDetails({ ...formDetails, theme_color: select_theme });;
    if (custom_theme) setcustom_theme('');
  }, [select_theme]);

  const setCustomThemeHandler = () => {
    if (customThemeCheck()) setFormDetails({ ...formDetails, theme_color: custom_theme, });
  }

  return (
    <>
      <div className={`flex my-2 ${div_class}`}>
        <label className={`w-1/5 text-sm mr-4`}>
          Brand Theme
          {props.mandatory && <label className="text-sm text-red-500">*</label>}
        </label>
        <div className="w-4/5">
          <>
            {theme_colors.map((theme_c) => (
              <Button
                key={theme_c.id}
                className={`${btn_class}`}
                style={{
                  backgroundColor: theme_c.color_code,
                  borderWidth: select_theme == theme_c.color_code ? '4px' : '0',
                  borderColor:
                    select_theme == theme_c.color_code
                      ? theme == 'light'
                        ? '#000000'
                        : '#E6E6E6'
                      : '',
                }}
                onClick={() => {
                  setSelect_theme(theme_c.color_code);
                }}
              />
            ))}
          </>
          <div className="flex mt-5 mb-1">
            <FormSIInput
              type={'text'}
              onChange={(e) => {
                if(e.currentTarget.value.length <= 7) {
                  setcustom_theme(e.currentTarget.value);
                }
              }}
              label={'Custom Color: '}
              placeholder={'#000000'}
              value={custom_theme}
              onBlur={() => {
                if(!customThemeCheck()) {
                  setFormErrors({
                    ...formErrors,
                    theme_color: 'Enter valid Hex color code',
                  })
                } else {
                  setCustomThemeHandler();
                }
              }}
            />
            {custom_theme && (
              <div
                className={`${btn_class} border border-black ml-3`}
                style={{ backgroundColor: custom_theme || '#000000' }}
              />
            )}
          </div>
          {props.error_message && <span className="text-sm text-red-500">{props.error_message}</span>}
        </div>
      </div>
    </>
  );
}
