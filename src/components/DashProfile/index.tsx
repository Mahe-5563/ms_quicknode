'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import FormDescription from '../FormComponents/FormDescription';
import FormSIInput from '../FormComponents/FormSIInput';
import FormUploadImage from '../FormComponents/FormUploadImage';
import SelectTheme from '../SelectTheme';
import CTAButton from '../ButtonCTA';
import { ProfileFormProps } from '@/interfaces';
import SelectInteraceTheme from '../SelectInterfaceTheme';
import { checkValuesObject, getAccentCode, loadAccentClass } from '@/operations/common';
// import { LoaderSVG } from '@/static_icons/loader';

export default function DashProfile() {
  const div_class = 'border-t border-gray-200 py-9 px-5';
  const field_width = "w-10/12";
  const input_width = "w-4/5";
  const [formDetails, setFormDetails] = useState<ProfileFormProps>({
    theme_color: '',
    profile_picture: '',
    company_name: '',
    company_address: '',
    company_description: '',
    interface_theme: '',
  });
  const [formErrors, setFormErrors] = useState<ProfileFormProps>({
    // theme_color: '',
    // profile_picture: '',
    company_name: '',
    company_address: '',
    company_description: '',
    // interface_theme: '',
  });

  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [active_theme, setActive_theme] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [is_changed, setIs_changed] = useState<boolean>(false);

  const router = useRouter();

  // LIFECYCLE METHODS...
  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
    loadProfileData();
  }, []);

  useEffect(() => {
    if(theme_accent_present) {
      setActive_theme(getAccentCode(theme_accent_present));
    };
  }, [theme_accent_present])

  useEffect(() => {
    if(formDetails.theme_color) {
      !is_changed && setIs_changed(true);
      setFormErrors({
        ...formErrors,
        theme_color: ""
      })
    }
  }, [formDetails.theme_color])

  // USER FUNCTIONS...
  function loadProfileData() {
    const parsedData = localStorage?.getItem("profile_details") && JSON.parse(localStorage?.getItem("profile_details") || "")
    if(parsedData) {
      setFormDetails({
        theme_color: parsedData.theme_color || "",
        profile_picture: parsedData.profile_picture || "",
        company_name: parsedData.company_name || "",
        company_address: parsedData.company_address || "",
        company_description: parsedData.company_description || "",
        interface_theme: parsedData.interface_theme || "",
      })
    }
  }

  function submitProfile() {
    const temp: ProfileFormProps = {
      // theme_color: !formDetails.theme_color ? "Please select or enter a valid hex color code" : "",
      // profile_picture: !formDetails.profile_picture ? "Please upload a valid company logo" : "",
      company_name: !formDetails.company_name ? "Please enter a valid company name" : "",
      company_address: !formDetails.company_address ? "Please enter a valid company address" : "",
      company_description: !formDetails.company_description ? "Please enter a valid company description" : "",
      // interface_theme: !formDetails.interface_theme ? "Please select a valid interface theme" : "",
    };
    setFormErrors(temp);
    if(checkValuesObject(temp)) {
      setSubmitting(true);
      localStorage.setItem('accent_theme', formDetails.theme_color || '');
      window.dispatchEvent(new Event('accent_theme_changes'));
      localStorage.setItem("profile_details", JSON.stringify(formDetails))
      setTimeout(() => {
        setSubmitting(false);
        // router.push("/home");
      }, 3000);
    }
  }

  return (
    <>
      {/* Company Name */}
      <section className={div_class}>
        <FormSIInput
          mandatory
          type={'text'}
          onChange={(e) => {
            setFormDetails({
              ...formDetails,
              company_name: e.currentTarget.value,
            });
            !is_changed && setIs_changed(true);
          }}
          onBlur={() => {
            setFormErrors({
              ...formErrors,
              company_name: !formDetails.company_name ? "Please enter a valid company name" : ""
            })
          }}
          label={'Company Name'}
          placeholder={'Enter company name'}
          div_class={field_width}
          input_class={input_width}
          value={formDetails.company_name}
          error_message={formErrors.company_name}
        />
      </section>

      {/* Location */}
      <section className={div_class}>
        <FormSIInput
          mandatory
          type={'text'}
          onChange={(e) => {
            setFormDetails({
              ...formDetails,
              company_address: e.currentTarget.value,
            });
            !is_changed && setIs_changed(true);
          }}
          onBlur={() => {
            setFormErrors({
              ...formErrors,
              company_address: !formDetails.company_address ? "Please enter a valid company address" : ""
            })
          }}
          label={'Location'}
          placeholder={'Enter location'}
          div_class={field_width}
          input_class={input_width}
          value={formDetails.company_address}
          error_message={formErrors.company_address}
        />
      </section>

      {/* Upload Image */}
      <section className={div_class}>
        <FormUploadImage
          mandatory
          src={formDetails.profile_picture || ""}
          setSrc={(e: string) => {
            setFormDetails({
              ...formDetails,
              profile_picture: e,
            });
            !is_changed && setIs_changed(true);
            if(e) {
              setFormErrors({
                ...formErrors,
                profile_picture: ""
              })
            }
          }}
          label={'Company Logo'}
          div_class={field_width}
          text_accent_class={active_theme}
          error_message={formErrors.profile_picture}
        />
      </section>

      {/* Description */}
      <section className={div_class}>
        <FormDescription
          mandatory
          onChange={(e) => {
            setFormDetails({
              ...formDetails,
              company_description: e.currentTarget.value,
            });
            !is_changed && setIs_changed(true);
          }}
          onBlur={() => {
            setFormErrors({
              ...formErrors,
              company_description: !formDetails.company_description ? "Please enter a valid company description" : ""
            })
          }}
          label={'Description of Company'}
          placeholder={'Enter description about company'}
          div_class={field_width}
          input_class={input_width}
          value={formDetails.company_description}
          error_message={formErrors.company_description}
        />
      </section>

      {/* Brand Theme */}
      <section className={div_class}>
        <SelectTheme
          mandatory
          formDetails={formDetails} 
          setFormDetails={setFormDetails} 
          setFormErrors={setFormErrors}
          formErrors={formErrors}
          div_class={field_width} 
          error_message={formErrors.theme_color}
        />
      </section>

      {/* Interface Theme */}
      <section className={div_class}>
        <SelectInteraceTheme 
          formDetails={formDetails} 
          setFormDetails={setFormDetails} 
          div_class={field_width}
          active_theme={active_theme}
        />
      </section>

      {/* Submit or Discard */}
      <section className={`flex justify-center gap-4 ${div_class}`}>
        <CTAButton
          id={`submit_profile`}
          btn_label={submitting ? 'Saving Changes...' : 'Save Changes'}
          onClick={submitProfile}
          is_submitting={submitting}
          btn_type={'-'}
          icon={submitting && 
            <svg
              aria-hidden="true"
              width={'20'}
              height={'20'}
              className="inline mr-2 text-gray-200 animate-bounce dark:text-gray-600 fill-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke={'#000'}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          }
        />
        {!submitting && 
          <CTAButton
            id={`discard_profile`}
            btn_label={'Discard Changes'}
            onClick={() => {
              router.push("/home");
            }}
            btn_type={'danger'}
          />
        }
      </section>
    </>
  );
}
