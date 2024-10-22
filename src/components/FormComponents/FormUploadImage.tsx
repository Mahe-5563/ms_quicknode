import { ChangeEvent } from 'react';
import { Button } from '@mui/base';
import Image from 'next/image';

export type FormUploadImageProps = {
  src: string;
  setSrc: (e: any) => void;
  label: string;
  error_message?: string;
  label_class?: string;
  div_class?: string;
  text_accent_class?: string;
  mandatory?: boolean;
};

export default function FormUploadImage({
  src,
  setSrc,
  label,
  div_class,
  label_class,
  error_message,
  text_accent_class,
  mandatory,
}: FormUploadImageProps) {

  function uploadImage(ev: ChangeEvent<HTMLInputElement>) {
    const [file]: any = ev.currentTarget.files;
    const reader = new FileReader();
    reader.onload = (e) => {
      setSrc(e.target?.result || '');
    };
    reader.onerror = (err) => {
      console.error('Error reading file:', err);
      // alert('An error occurred while reading the file.');
    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className={`flex ${div_class}`}>
        {label && (
          <label className={`${label_class} w-1/5 text-sm mr-4`}>
            {label}
            {mandatory && <label className="text-sm text-red-500">*</label>}
          </label>
        )}
        <div className="flex flex-col w-4/5">
          <div className="flex">
            <Image
              id="user_icon"
              src={src || '/images/user-icon.svg'}
              height={70}
              width={70}
              alt="Upload Image"
              className="rounded-full border border-zinc-400 w-16 h-16"
            />
            <label
              className="flex text-sm ml-3 my-auto cursor-pointer"
              style={{ color: text_accent_class }}
            >
              Update
              <input
                style={{ display: 'none' }}
                title="Update"
                type="file"
                id="image_upload"
                accept="image/*"
                onChange={uploadImage}
              />
            </label>
            <Button className="text-sm ml-3">Delete</Button>
          </div>
          {error_message && <span className="text-sm text-red-500 mt-2">{error_message}</span>}
        </div>
      </div>
    </>
  );
}
