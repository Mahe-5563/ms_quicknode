'use client';
import CTAButton from '@/components/ButtonCTA';

type DashboardPreviewProps = {
  str?: any;
  title?: string;
}

export default function DashboardPreview({ str, title }: DashboardPreviewProps) {
  
  const downloadPreview = async () => {}

  return (
    <>
      <section className="pt-4 pb-2 h-20 px-4 border-b border-l dark:border-gray-500 flex justify-between">
        <h4 className="text-sm my-auto">Preview</h4>
        <div className="flex gap-2 my-auto">
          <CTAButton
            id={`download_preview`}
            icon={
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M8 11.4115C7.8795 11.4115 7.76733 11.3923 7.6635 11.3538C7.55967 11.3154 7.46092 11.2494 7.36725 11.1558L4.25775 8.04625C4.10908 7.89742 4.03567 7.72333 4.0375 7.524C4.0395 7.32467 4.11292 7.14742 4.25775 6.99225C4.41292 6.83725 4.59108 6.75717 4.79225 6.752C4.99358 6.74683 5.17183 6.82183 5.327 6.977L7.25 8.9V1.25C7.25 1.03717 7.32183 0.859 7.4655 0.7155C7.609 0.571833 7.78717 0.5 8 0.5C8.21283 0.5 8.391 0.571833 8.5345 0.7155C8.67817 0.859 8.75 1.03717 8.75 1.25V8.9L10.673 6.977C10.8218 6.82833 10.9984 6.75492 11.2028 6.75675C11.4072 6.75875 11.5871 6.83725 11.7423 6.99225C11.8871 7.14742 11.9621 7.32308 11.9672 7.51925C11.9724 7.71542 11.8974 7.89108 11.7423 8.04625L8.63275 11.1558C8.53908 11.2494 8.44033 11.3154 8.3365 11.3538C8.23267 11.3923 8.1205 11.4115 8 11.4115ZM2.30775 15.5C1.80258 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V11.7308C0.5 11.5179 0.571833 11.3398 0.7155 11.1962C0.859 11.0526 1.03717 10.9808 1.25 10.9808C1.46283 10.9808 1.641 11.0526 1.7845 11.1962C1.92817 11.3398 2 11.5179 2 11.7308V13.6923C2 13.7692 2.03208 13.8398 2.09625 13.9038C2.16025 13.9679 2.23075 14 2.30775 14H13.6923C13.7692 14 13.8398 13.9679 13.9038 13.9038C13.9679 13.8398 14 13.7692 14 13.6923V11.7308C14 11.5179 14.0718 11.3398 14.2155 11.1962C14.359 11.0526 14.5372 10.9808 14.75 10.9808C14.9628 10.9808 15.141 11.0526 15.2845 11.1962C15.4282 11.3398 15.5 11.5179 15.5 11.7308V13.6923C15.5 14.1974 15.325 14.625 14.975 14.975C14.625 15.325 14.1974 15.5 13.6923 15.5H2.30775Z" 
                  fill="#1E1E1E"
                />
              </svg>
            }
            onClick={downloadPreview}
            btn_type={'primary'}
            btn_class={`!px-3`}
          />
          <CTAButton
            id={`menu_preview`}
            icon={
              <svg 
                width="16" 
                height="4" 
                viewBox="0 0 16 4" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className='my-auto'
              >
                <path 
                  d="M2.23047 3.5C1.81797 3.5 1.46489 3.35308 1.17122 3.05925C0.877386 2.76558 0.730469 2.4125 0.730469 2C0.730469 1.5875 0.877386 1.23442 1.17122 0.94075C1.46489 0.646917 1.81797 0.5 2.23047 0.5C2.64297 0.5 2.99614 0.646917 3.28997 0.94075C3.58364 1.23442 3.73047 1.5875 3.73047 2C3.73047 2.4125 3.58364 2.76558 3.28997 3.05925C2.99614 3.35308 2.64297 3.5 2.23047 3.5ZM7.99972 3.5C7.58722 3.5 7.23414 3.35308 6.94047 3.05925C6.64664 2.76558 6.49972 2.4125 6.49972 2C6.49972 1.5875 6.64664 1.23442 6.94047 0.94075C7.23414 0.646917 7.58722 0.5 7.99972 0.5C8.41222 0.5 8.7653 0.646917 9.05897 0.94075C9.3528 1.23442 9.49972 1.5875 9.49972 2C9.49972 2.4125 9.3528 2.76558 9.05897 3.05925C8.7653 3.35308 8.41222 3.5 7.99972 3.5ZM13.769 3.5C13.3565 3.5 13.0033 3.35308 12.7095 3.05925C12.4158 2.76558 12.269 2.4125 12.269 2C12.269 1.5875 12.4158 1.23442 12.7095 0.94075C13.0033 0.646917 13.3565 0.5 13.769 0.5C14.1815 0.5 14.5346 0.646917 14.8282 0.94075C15.1221 1.23442 15.269 1.5875 15.269 2C15.269 2.4125 15.1221 2.76558 14.8282 3.05925C14.5346 3.35308 14.1815 3.5 13.769 3.5Z" 
                  fill="#1E1E1E"
                />
              </svg>
            }
            onClick={() => {}}
            btn_type={'white'}
            btn_class={`!px-2`}
          />
        </div>
      </section>
      <section className="bg-gray-100 p-3 h-lvh border-l dark:border-gray-500 dark:bg-black">
        <div className="bg-white p-3 h-5/6 overflow-auto dark:bg-[#222222]">
          <h4 className="text-md mb-3">{title}</h4>
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: str }}></p>
        </div>
      </section>
    </>
  );
}