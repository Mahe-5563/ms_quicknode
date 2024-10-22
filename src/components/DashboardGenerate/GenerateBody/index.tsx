'use client';
import { Dispatch, SetStateAction, useState, useEffect, Fragment } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

import CTAButton from '@/components/ButtonCTA';
import IconImage from '@/components/IconImage';
import OpenAI from 'openai';
import { loadAccentClass, getAccentCode } from '@/operations/common';
// import { LoaderSVG } from '@/static_icons/loader';

export default function GenerateBody({
  generated_content,
  setGenerated_content,
  task_title, // third step
  plan_type, // business (or) market (or) legal
  subplan_type, // second step
}: {
  generated_content: string;
  setGenerated_content: Dispatch<SetStateAction<string>>;
  task_title: string;
  plan_type: string;
  subplan_type: string;
}) {
  const router = useRouter();
  const { theme } = useTheme();
  const [is_generating, setIs_generating] = useState<boolean>(false);
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [accent_theme, setAccent_theme] = useState<string>('');
  const [gpt_content, setGpt_content] = useState<string>('');
  const [is_saved, setIs_saved] = useState<boolean>(true);

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
    setGpt_content(loadGenerateString());
  }, []);

  useEffect(() => {
    if (theme_accent_present) {
      setAccent_theme(getAccentCode(theme_accent_present));
    }
  }, [theme_accent_present]);

  function loadGenerateString() {
    // task_title: Mission statement
    // plan_type: Business
    // subplan_type: Executive summary

    const data =
      localStorage.getItem('profile_details') &&
      JSON.parse(localStorage.getItem('profile_details') || '');
    // company_description: Detailed description of the company provided in the profile section
    const company_description = data.company_description || '';
    // company_name: Name of the company provided in the profile section
    const company_name = data.company_name || '';
    return `
      Draft a detailed professional ${subplan_type} plan focusing only on the ${task_title} by understanding the business idea for the below mentioned organization. Perform a deep research on the ${plan_type} idea and give a detailed structure of the ${task_title}. The result should be in a proper html paragraph tag.
      Organisation: ${company_name}
      Description: ${company_description}
    `;
  }

  async function generateStrategy() {
    setIs_generating(true);
    setIs_saved(false);
    const stream = await new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      organization: process.env.ORG_KEY,
      project: process.env.PROJ_KEY,
      dangerouslyAllowBrowser: true,
    }).chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: gpt_content,
        },
      ],
      stream: true,
    });

    let content = '';
    for await (const chunk of stream) {
      content += chunk.choices[0].delta.content || '';
      if (chunk.choices[0].finish_reason) {
        setGenerated_content(content);
        setIs_generating(false);
      }
    }
  }

  useEffect(() => {
    console.info(is_saved);
  }, [is_saved]);

  return (
    <section className="p-2">
      {generated_content ? (
        <Fragment>
          <div className="flex h-96 overflow-auto border-b dark:border-gray-500">
            <IconImage
              src={
                theme == 'dark' ? `/icons/dark/ms_chat_logo.svg` : `/icons/light/ms_chat_logo.svg`
              }
              alt={'chat'}
              height={42}
              width={42}
              className={'mb-auto mr-2'}
            />
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: generated_content }}
              style={{
                listStyle: 'inside',
              }}
            >
              {/* {generated_content} */}
            </p>
          </div>
          <div className="flex justify-between">
            <CTAButton
              id={`back`}
              btn_label={'< Back'}
              onClick={() => {
                router.back();
              }}
              btn_type={'transp'}
              btn_class={'!px-4 mt-4'}
            />
            <div className="flex justify-end gap-4">
              <CTAButton
                id={`regenerate_strategy`}
                btn_label={is_generating ? 'Regenerating...' : 'Regenerate'}
                onClick={() => {
                  generateStrategy();
                }}
                btn_type={'white'}
                btn_class={'!px-4 mt-4'}
                icon={
                  is_generating && (
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
                  )
                }
              />
              <CTAButton
                id={`save_strategy`}
                btn_label={is_saved ? "Saved" : 'Save'}
                onClick={() => {
                  const ls_key = location.pathname.replace(/[/]/gi, "_")+"_"+(location.search.replace("?task=", "").replace(/[/]/gi, "_"))
                  setIs_saved(true);
                  localStorage.setItem(ls_key, generated_content)
                }}
                btn_type={'primary'}
                // disabled={is_saved}
                icon={
                  <svg
                    fill="#000000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 407.096 407.096"
                  >
                    <g>
                      <g>
                        <path
                          d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086 c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032 C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"
                        />
                        <path
                          d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08 c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"
                        />
                      </g>
                    </g>
                  </svg>
                }
                btn_class={'!px-4 mt-4'}
              />
              {/* <CTAButton
                id={`edit_strategy`}
                btn_label={'Edit'}
                onClick={() => {}}
                btn_type={'primary'}
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="my-auto"
                  >
                    <path
                      d="M2 16H3.2615L13.498 5.7635L12.2365 4.502L2 14.7385V16ZM1.404 17.5C1.14783 17.5 0.933167 17.4133 0.76 17.24C0.586667 17.0668 0.5 16.8522 0.5 16.596V14.8635C0.5 14.6197 0.546833 14.3873 0.6405 14.1663C0.734 13.9453 0.862833 13.7527 1.027 13.5885L13.6905 0.93075C13.8417 0.793416 14.0086 0.687333 14.1913 0.6125C14.3741 0.5375 14.5658 0.5 14.7663 0.5C14.9668 0.5 15.1609 0.535584 15.3488 0.60675C15.5368 0.677917 15.7032 0.791083 15.848 0.946249L17.0693 2.18275C17.2244 2.32758 17.335 2.49425 17.401 2.68275C17.467 2.87125 17.5 3.05975 17.5 3.24825C17.5 3.44942 17.4657 3.64133 17.397 3.824C17.3283 4.00683 17.2191 4.17383 17.0693 4.325L4.4115 16.973C4.24733 17.1372 4.05475 17.266 3.83375 17.3595C3.61275 17.4532 3.38033 17.5 3.1365 17.5H1.404ZM12.8562 5.14375L12.2365 4.502L13.498 5.7635L12.8562 5.14375Z"
                      fill="black"
                    />
                  </svg>
                }
                btn_class={'!px-4 mt-4'}
              /> */}
            </div>
          </div>
        </Fragment>
      ) : (
        <div className="flex h-80 justify-center items-center">
          <div className="text-center align-middle">
            <h3 className="mb-3 text-md">How can we help you?</h3>
            <h5 className="mb-3 text-sm">
              Get started by clicking generate strategy and mystartup.ai will do the rest for you.
            </h5>
            {is_generating ? (
              <div className="my-6">
                <svg
                  aria-hidden="true"
                  width={'28'}
                  height={'28'}
                  className="inline mr-2 text-gray-200 animate-bounce dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke={accent_theme}
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="my-auto" style={{ color: accent_theme || '#8765CC' }}>
                  Generating your strategy...
                </span>
              </div>
            ) : (
              <CTAButton
                id={`generate_strategy`}
                btn_label={'Generate Strategy'}
                onClick={() => {
                  if (gpt_content) {
                    generateStrategy();
                  } else {
                    // console.error("GPT Content is empty!");
                  }
                }}
                btn_type={'primary'}
                btn_class="mx-auto my-6"
                icon={
                  <svg
                    width="19"
                    height="12"
                    viewBox="0 0 19 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="my-auto"
                  >
                    <path
                      d="M0.74975 11.75C0.537083 11.75 0.359 11.6781 0.2155 11.5343C0.0718334 11.3906 0 11.2125 0 11V1C0 0.7875 0.0719166 0.609417 0.21575 0.46575C0.359583 0.321917 0.53775 0.25 0.75025 0.25C0.962917 0.25 1.141 0.321917 1.2845 0.46575C1.42817 0.609417 1.5 0.7875 1.5 1V11C1.5 11.2125 1.42808 11.3906 1.28425 11.5343C1.14042 11.6781 0.96225 11.75 0.74975 11.75ZM16.1365 6.75H4.44225C4.22975 6.75 4.05167 6.67808 3.908 6.53425C3.76417 6.39042 3.69225 6.21225 3.69225 5.99975C3.69225 5.78708 3.76417 5.609 3.908 5.4655C4.05167 5.32183 4.22975 5.25 4.44225 5.25H16.127L12.8288 1.91725C12.6904 1.77875 12.6202 1.60892 12.6182 1.40775C12.6164 1.20642 12.6898 1.03083 12.8385 0.881C12.9748 0.743666 13.1483 0.675 13.359 0.675C13.5697 0.675 13.7443 0.74425 13.8828 0.88275L18.3673 5.36725C18.4609 5.46092 18.5269 5.56008 18.5652 5.66475C18.6037 5.76942 18.623 5.88158 18.623 6.00125C18.623 6.12092 18.6037 6.23267 18.5652 6.3365C18.5269 6.44033 18.4609 6.53908 18.3673 6.63275L13.873 11.127C13.7362 11.2653 13.5651 11.3345 13.3598 11.3345C13.1546 11.3345 12.9776 11.2653 12.8288 11.127C12.6738 10.9782 12.5978 10.7999 12.601 10.5923C12.6042 10.3846 12.6801 10.2064 12.8288 10.0578L16.1365 6.75Z"
                      fill="black"
                    />
                  </svg>
                }
              />
            )}
            <h6 className="mb-3 text-xs">
              By using mystartup.ai, you agree to our Terms and have read our Privacy Policy.
            </h6>
          </div>
        </div>
      )}
    </section>
  );
}
