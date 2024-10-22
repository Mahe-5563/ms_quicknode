import { IconImageProps } from '@/interfaces';
import Image from 'next/image';

export default function IconImage({ src, className, alt, style, height, width }: IconImageProps) {
  return (
    <Image
      title={alt}
      src={src}
      height={height || 16}
      width={width || 16}
      className={className}
      alt={alt}
      style={style}
    />
  );
}
