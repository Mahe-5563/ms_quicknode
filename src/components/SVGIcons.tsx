import { SVGIconProps } from '@/interfaces';

export default function SVGIcons({ 
  children,
  fill,
  height,
  width, 
  viewBox,
  className,
}: SVGIconProps) {
  return (
    <>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox={viewBox || "0 -960 960 960"}
        height={height || "24px"}
        width={width || "24px"}
        fill={fill}
        className={className}
      >
        {children}
      </svg>
    </>
  );
}
