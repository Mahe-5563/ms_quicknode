export function BusinessIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '20'}
      height={height || '18'}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.30775 17.5C1.80258 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.1974 0.5 15.6923V5.30775C0.5 4.80258 0.675 4.375 1.025 4.025C1.375 3.675 1.80258 3.5 2.30775 3.5H6.5V1.80775C6.5 1.30258 6.675 0.875 7.025 0.525C7.375 0.175 7.80258 0 8.30775 0H11.6923C12.1974 0 12.625 0.175 12.975 0.525C13.325 0.875 13.5 1.30258 13.5 1.80775V3.5H17.6923C18.1974 3.5 18.625 3.675 18.975 4.025C19.325 4.375 19.5 4.80258 19.5 5.30775V15.6923C19.5 16.1974 19.325 16.625 18.975 16.975C18.625 17.325 18.1974 17.5 17.6923 17.5H2.30775ZM2.30775 16H17.6923C17.7693 16 17.8398 15.9679 17.9038 15.9038C17.9679 15.8398 18 15.7692 18 15.6923V5.30775C18 5.23075 17.9679 5.16025 17.9038 5.09625C17.8398 5.03208 17.7693 5 17.6923 5H2.30775C2.23075 5 2.16025 5.03208 2.09625 5.09625C2.03208 5.16025 2 5.23075 2 5.30775V15.6923C2 15.7692 2.03208 15.8398 2.09625 15.9038C2.16025 15.9679 2.23075 16 2.30775 16ZM8 3.5H12V1.80775C12 1.73075 11.9679 1.66025 11.9038 1.59625C11.8398 1.53208 11.7692 1.5 11.6923 1.5H8.30775C8.23075 1.5 8.16025 1.53208 8.09625 1.59625C8.03208 1.66025 8 1.73075 8 1.80775V3.5Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function DocumentIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '20'}
      height={height || '16'}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.30775 15.5C1.80258 15.5 1.375 15.325 1.025 14.975C0.675 14.625 0.5 14.1974 0.5 13.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H7.05C7.291 0.5 7.52275 0.546833 7.74525 0.6405C7.96758 0.734 8.16083 0.862834 8.325 1.027L9.798 2.5H17.6923C18.1974 2.5 18.625 2.675 18.975 3.025C19.325 3.375 19.5 3.80258 19.5 4.30775V13.6923C19.5 14.1974 19.325 14.625 18.975 14.975C18.625 15.325 18.1974 15.5 17.6923 15.5H2.30775ZM2.30775 14H17.6923C17.7821 14 17.8558 13.9712 17.9135 13.9135C17.9712 13.8558 18 13.7821 18 13.6923V4.30775C18 4.21792 17.9712 4.14417 17.9135 4.0865C17.8558 4.02883 17.7821 4 17.6923 4H9.1845L7.27125 2.0865C7.23908 2.0545 7.20542 2.03208 7.17025 2.01925C7.13492 2.00642 7.098 2 7.0595 2H2.30775C2.21792 2 2.14417 2.02883 2.0865 2.0865C2.02883 2.14417 2 2.21792 2 2.30775V13.6923C2 13.7821 2.02883 13.8558 2.0865 13.9135C2.14417 13.9712 2.21792 14 2.30775 14Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function FundingIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '20'}
      height={height || '19'}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.20375 18.5C3.83975 18.5 3.493 18.3763 3.1635 18.1288C2.834 17.8814 2.61733 17.5788 2.5135 17.221C2.09683 15.7827 1.76 14.5638 1.503 13.5645C1.24583 12.565 1.04292 11.7034 0.89425 10.9798C0.745583 10.2561 0.642667 9.62467 0.5855 9.0855C0.5285 8.5465 0.5 8.018 0.5 7.5C0.5 6.10767 0.98525 4.92625 1.95575 3.95575C2.92625 2.98525 4.10767 2.5 5.5 2.5H10.75C11.2 1.9 11.75 1.41667 12.4 1.05C13.05 0.683333 13.75 0.5 14.5 0.5C14.7757 0.5 15.0113 0.59775 15.2068 0.79325C15.4023 0.98875 15.5 1.22433 15.5 1.5C15.5 1.568 15.4907 1.63433 15.472 1.699C15.4535 1.76383 15.434 1.82825 15.4135 1.89225C15.3403 2.08842 15.2698 2.30058 15.202 2.52875C15.134 2.75708 15.0705 3.04683 15.0115 3.398L17.6135 6H18.596C18.8538 6 19.0689 6.08625 19.2413 6.25875C19.4138 6.43108 19.5 6.64617 19.5 6.904V11.452C19.5 11.6493 19.4439 11.8249 19.3318 11.9788C19.2196 12.1326 19.0648 12.2448 18.8673 12.3152L16.771 13.0058L15.5115 17.2095C15.391 17.6045 15.1718 17.9183 14.8538 18.151C14.5359 18.3837 14.1744 18.5 13.7693 18.5H12.3077C11.8091 18.5 11.3831 18.3234 11.0297 17.9703C10.6766 17.6169 10.5 17.1909 10.5 16.6923V16.5H7.5V16.6923C7.5 17.1909 7.32342 17.6169 6.97025 17.9703C6.61692 18.3234 6.19092 18.5 5.69225 18.5H4.20375ZM4.25 17H5.69225C5.78208 17 5.85583 16.9712 5.9135 16.9135C5.97117 16.8558 6 16.7821 6 16.6923V15H12V16.6923C12 16.7821 12.0288 16.8558 12.0865 16.9135C12.1442 16.9712 12.2179 17 12.3077 17H13.7693C13.8398 17 13.9023 16.9808 13.9568 16.9423C14.0113 16.9037 14.0481 16.8493 14.0673 16.7788L15.55 11.85L18 11.025V7.5H17L13.5 4C13.5 3.68583 13.5224 3.364 13.5673 3.0345C13.6121 2.70517 13.6794 2.39683 13.7693 2.1095C13.3051 2.2365 12.8849 2.4705 12.5087 2.8115C12.1324 3.1525 11.8545 3.54867 11.675 4H5.5C4.53333 4 3.70833 4.34167 3.025 5.025C2.34167 5.70833 2 6.53333 2 7.5C2 8.1705 2.16858 9.3125 2.50575 10.926C2.84292 12.5395 3.31858 14.484 3.93275 16.7595C3.95192 16.83 3.992 16.8878 4.053 16.9328C4.11383 16.9776 4.1795 17 4.25 17ZM14 8.8845C14.2448 8.8845 14.4535 8.79833 14.626 8.626C14.7983 8.4535 14.8845 8.24483 14.8845 8C14.8845 7.75517 14.7983 7.5465 14.626 7.374C14.4535 7.20167 14.2448 7.1155 14 7.1155C13.7552 7.1155 13.5465 7.20167 13.374 7.374C13.2017 7.5465 13.1155 7.75517 13.1155 8C13.1155 8.24483 13.2017 8.4535 13.374 8.626C13.5465 8.79833 13.7552 8.8845 14 8.8845ZM10.25 6.75C10.4628 6.75 10.641 6.67817 10.7845 6.5345C10.9282 6.391 11 6.21283 11 6C11 5.78717 10.9282 5.609 10.7845 5.4655C10.641 5.32183 10.4628 5.25 10.25 5.25H6.75C6.53717 5.25 6.359 5.32183 6.2155 5.4655C6.07183 5.609 6 5.78717 6 6C6 6.21283 6.07183 6.391 6.2155 6.5345C6.359 6.67817 6.53717 6.75 6.75 6.75H10.25Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function HomeIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '16'}
      height={height || '17'}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 15.0008H5.34625V9.96234C5.34625 9.70634 5.43283 9.49168 5.606 9.31834C5.77933 9.14518 5.994 9.05859 6.25 9.05859H9.75C10.006 9.05859 10.2207 9.14518 10.394 9.31834C10.5672 9.49168 10.6538 9.70634 10.6538 9.96234V15.0008H14V6.15459C14 6.10343 13.9888 6.05701 13.9663 6.01534C13.9439 5.97368 13.9135 5.93676 13.875 5.90459L8.18275 1.62584C8.13142 1.58101 8.0705 1.55859 8 1.55859C7.9295 1.55859 7.86858 1.58101 7.81725 1.62584L2.125 5.90459C2.0865 5.93676 2.05608 5.97368 2.03375 6.01534C2.01125 6.05701 2 6.10343 2 6.15459V15.0008ZM0.5 15.0008V6.15459C0.5 5.86843 0.564 5.59734 0.692 5.34134C0.820166 5.08518 0.997167 4.87426 1.223 4.70859L6.9155 0.420094C7.23133 0.179094 7.59233 0.0585938 7.9985 0.0585938C8.40467 0.0585938 8.76667 0.179094 9.0845 0.420094L14.777 4.70859C15.0028 4.87426 15.1798 5.08518 15.308 5.34134C15.436 5.59734 15.5 5.86843 15.5 6.15459V15.0008C15.5 15.4098 15.3523 15.7621 15.0568 16.0576C14.7613 16.3531 14.409 16.5008 14 16.5008H10.0578C9.80158 16.5008 9.58692 16.4142 9.41375 16.2408C9.24042 16.0677 9.15375 15.853 9.15375 15.5968V10.5586H6.84625V15.5968C6.84625 15.853 6.75958 16.0677 6.58625 16.2408C6.41308 16.4142 6.19842 16.5008 5.94225 16.5008H2C1.591 16.5008 1.23875 16.3531 0.94325 16.0576C0.64775 15.7621 0.5 15.4098 0.5 15.0008Z"
        fill={color || '#EBEBEB'}
      />
    </svg>
  );
}

export function LegalIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '16'}
      height={height || '20'}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 15.75H11C11.2128 15.75 11.391 15.6782 11.5345 15.5345C11.6782 15.391 11.75 15.2128 11.75 15C11.75 14.7872 11.6782 14.609 11.5345 14.4655C11.391 14.3218 11.2128 14.25 11 14.25H5C4.78717 14.25 4.609 14.3218 4.4655 14.4655C4.32183 14.609 4.25 14.7872 4.25 15C4.25 15.2128 4.32183 15.391 4.4655 15.5345C4.609 15.6782 4.78717 15.75 5 15.75ZM5 11.75H11C11.2128 11.75 11.391 11.6782 11.5345 11.5345C11.6782 11.391 11.75 11.2128 11.75 11C11.75 10.7872 11.6782 10.609 11.5345 10.4655C11.391 10.3218 11.2128 10.25 11 10.25H5C4.78717 10.25 4.609 10.3218 4.4655 10.4655C4.32183 10.609 4.25 10.7872 4.25 11C4.25 11.2128 4.32183 11.391 4.4655 11.5345C4.609 11.6782 4.78717 11.75 5 11.75ZM2.30775 19.5C1.80258 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.1974 0.5 17.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H9.502C9.743 0.5 9.97475 0.546833 10.1973 0.6405C10.4196 0.734 10.6128 0.862834 10.777 1.027L14.973 5.223C15.1372 5.38717 15.266 5.58042 15.3595 5.80275C15.4532 6.02525 15.5 6.257 15.5 6.498V17.6923C15.5 18.1974 15.325 18.625 14.975 18.975C14.625 19.325 14.1974 19.5 13.6923 19.5H2.30775ZM9.5 5.596V2H2.30775C2.23075 2 2.16025 2.03208 2.09625 2.09625C2.03208 2.16025 2 2.23075 2 2.30775V17.6923C2 17.7693 2.03208 17.8398 2.09625 17.9038C2.16025 17.9679 2.23075 18 2.30775 18H13.6923C13.7692 18 13.8398 17.9679 13.9038 17.9038C13.9679 17.8398 14 17.7693 14 17.6923V6.5H10.404C10.1462 6.5 9.93108 6.41375 9.75875 6.24125C9.58625 6.06892 9.5 5.85383 9.5 5.596Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function MarketingIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '18'}
      height={height || '17'}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.99975 16.7516C0.787083 16.7516 0.609 16.6797 0.4655 16.5358C0.321833 16.3922 0.25 16.2141 0.25 16.0016V15.1073C0.25 14.8948 0.321917 14.7168 0.46575 14.5731C0.609583 14.4293 0.78775 14.3573 1.00025 14.3573C1.21292 14.3573 1.391 14.4293 1.5345 14.5731C1.67817 14.7168 1.75 14.8948 1.75 15.1073V16.0016C1.75 16.2141 1.67808 16.3922 1.53425 16.5358C1.39042 16.6797 1.21225 16.7516 0.99975 16.7516ZM4.99975 16.7516C4.78708 16.7516 4.609 16.6797 4.4655 16.5358C4.32183 16.3922 4.25 16.2141 4.25 16.0016V10.6073C4.25 10.3948 4.32192 10.2168 4.46575 10.0731C4.60958 9.92926 4.78775 9.85735 5.00025 9.85735C5.21292 9.85735 5.391 9.92926 5.5345 10.0731C5.67817 10.2168 5.75 10.3948 5.75 10.6073V16.0016C5.75 16.2141 5.67808 16.3922 5.53425 16.5358C5.39042 16.6797 5.21225 16.7516 4.99975 16.7516ZM8.99975 16.7516C8.78708 16.7516 8.609 16.6797 8.4655 16.5358C8.32183 16.3922 8.25 16.2141 8.25 16.0016V12.6073C8.25 12.3948 8.32192 12.2168 8.46575 12.0731C8.60958 11.9293 8.78775 11.8573 9.00025 11.8573C9.21292 11.8573 9.391 11.9293 9.5345 12.0731C9.67817 12.2168 9.75 12.3948 9.75 12.6073V16.0016C9.75 16.2141 9.67808 16.3922 9.53425 16.5358C9.39042 16.6797 9.21225 16.7516 8.99975 16.7516ZM12.9998 16.7516C12.7871 16.7516 12.609 16.6797 12.4655 16.5358C12.3218 16.3922 12.25 16.2141 12.25 16.0016V11.1073C12.25 10.8948 12.3219 10.7168 12.4658 10.5731C12.6096 10.4293 12.7878 10.3573 13.0003 10.3573C13.2129 10.3573 13.391 10.4293 13.5345 10.5731C13.6782 10.7168 13.75 10.8948 13.75 11.1073V16.0016C13.75 16.2141 13.6781 16.3922 13.5343 16.5358C13.3904 16.6797 13.2122 16.7516 12.9998 16.7516ZM16.9998 16.7516C16.7871 16.7516 16.609 16.6797 16.4655 16.5358C16.3218 16.3922 16.25 16.2141 16.25 16.0016V7.10735C16.25 6.89485 16.3219 6.71676 16.4657 6.5731C16.6096 6.42926 16.7878 6.35735 17.0002 6.35735C17.2129 6.35735 17.391 6.42926 17.5345 6.5731C17.6782 6.71676 17.75 6.89485 17.75 7.10735V16.0016C17.75 16.2141 17.6781 16.3922 17.5343 16.5358C17.3904 16.6797 17.2122 16.7516 16.9998 16.7516ZM11 7.70735C10.7653 7.70735 10.5385 7.66235 10.3195 7.57235C10.1005 7.48235 9.90042 7.35493 9.71925 7.1901L7.22125 4.69185C7.16358 4.63418 7.08983 4.60535 7 4.60535C6.91017 4.60535 6.83642 4.63418 6.77875 4.69185L1.527 9.94385C1.37817 10.0925 1.19992 10.1659 0.99225 10.1641C0.784583 10.1621 0.606417 10.0836 0.45775 9.9286C0.31925 9.77976 0.253083 9.60276 0.25925 9.3976C0.265417 9.19226 0.336667 9.02118 0.473 8.88435L5.71925 3.6381C5.90042 3.45826 6.1005 3.3271 6.3195 3.2446C6.5385 3.1621 6.76533 3.12085 7 3.12085C7.23467 3.12085 7.46525 3.1621 7.69175 3.2446C7.91825 3.3271 8.11458 3.45826 8.28075 3.6381L10.7788 6.13635C10.8364 6.19401 10.9102 6.22285 11 6.22285C11.0898 6.22285 11.1636 6.19401 11.2212 6.13635L16.473 0.884346C16.6218 0.735679 16.8001 0.662263 17.0077 0.664096C17.2154 0.666096 17.3936 0.744596 17.5422 0.899596C17.6807 1.04843 17.7469 1.22543 17.7408 1.4306C17.7346 1.63593 17.6633 1.80701 17.527 1.94385L12.2807 7.1901C12.1146 7.35493 11.9183 7.48235 11.6917 7.57235C11.4653 7.66235 11.2347 7.70735 11 7.70735Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function PitchDeckIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '20'}
      height={height || '19'}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7793 6.10575C14.5341 6.10575 14.3285 6.02283 14.1625 5.857C13.9965 5.69133 13.9135 5.48592 13.9135 5.24075C13.9135 4.99558 13.9964 4.79 14.1622 4.624C14.3279 4.458 14.5333 4.375 14.7785 4.375C15.0237 4.375 15.2292 4.45792 15.3953 4.62375C15.5612 4.78958 15.6443 4.995 15.6443 5.24C15.6443 5.48517 15.5613 5.69075 15.3955 5.85675C15.2297 6.02275 15.0243 6.10575 14.7793 6.10575ZM15.5038 11.8463H7.99625C7.80375 11.8463 7.66683 11.7642 7.5855 11.6C7.50417 11.4358 7.52375 11.2768 7.64425 11.123L9.02125 9.31725C9.11475 9.19675 9.23358 9.1365 9.37775 9.1365C9.52208 9.1365 9.641 9.19358 9.7345 9.30775L10.9423 10.8077L12.9578 8.2365C13.0513 8.116 13.1718 8.05575 13.3193 8.05575C13.4666 8.05575 13.5871 8.116 13.6807 8.2365L15.8652 11.123C15.9794 11.2768 15.9958 11.4358 15.9145 11.6C15.833 11.7642 15.6961 11.8463 15.5038 11.8463ZM2.55775 19C2.05258 19 1.625 18.825 1.275 18.475C0.925 18.125 0.75 17.6974 0.75 17.1923V5.05775C0.75 4.84525 0.821917 4.66708 0.96575 4.52325C1.10958 4.37958 1.28775 4.30775 1.50025 4.30775C1.71292 4.30775 1.89108 4.37958 2.03475 4.52325C2.17825 4.66708 2.25 4.84525 2.25 5.05775V17.1923C2.25 17.2693 2.28208 17.3398 2.34625 17.4038C2.41025 17.4679 2.48075 17.5 2.55775 17.5H14.6923C14.9047 17.5 15.0829 17.5719 15.2268 17.7157C15.3704 17.8596 15.4423 18.0378 15.4423 18.2502C15.4423 18.4629 15.3704 18.641 15.2268 18.7845C15.0829 18.9282 14.9047 19 14.6923 19H2.55775ZM4.25 2.30775C4.25 1.80258 4.425 1.375 4.775 1.025C5.125 0.675 5.55258 0.5 6.05775 0.5H9.90375C10.1163 0.5 10.2944 0.571917 10.4383 0.71575C10.5819 0.859583 10.6538 1.03775 10.6538 1.25025C10.6538 1.46292 10.5819 1.641 10.4383 1.7845C10.2944 1.92817 10.1163 2 9.90375 2H6.05775C5.98075 2 5.91025 2.03208 5.84625 2.09625C5.78208 2.16025 5.75 2.23075 5.75 2.30775V6.52875C5.75 6.74125 5.67808 6.91942 5.53425 7.06325C5.39042 7.20692 5.21225 7.27875 4.99975 7.27875C4.78708 7.27875 4.609 7.20692 4.4655 7.06325C4.32183 6.91942 4.25 6.74125 4.25 6.52875V2.30775ZM6.05775 15.5C5.55258 15.5 5.125 15.325 4.775 14.975C4.425 14.625 4.25 14.1974 4.25 13.6923V10.2213C4.25 10.0087 4.32192 9.83058 4.46575 9.68675C4.60958 9.54308 4.78775 9.47125 5.00025 9.47125C5.21292 9.47125 5.391 9.54308 5.5345 9.68675C5.67817 9.83058 5.75 10.0087 5.75 10.2213V13.6923C5.75 13.7692 5.78208 13.8398 5.84625 13.9038C5.91025 13.9679 5.98075 14 6.05775 14H9.90375C10.1163 14 10.2944 14.0719 10.4383 14.2158C10.5819 14.3596 10.6538 14.5378 10.6538 14.7503C10.6538 14.9629 10.5819 15.141 10.4383 15.2845C10.2944 15.4282 10.1163 15.5 9.90375 15.5H6.05775ZM17.4423 15.5H13.596C13.3837 15.5 13.2056 15.4281 13.0617 15.2843C12.9181 15.1404 12.8462 14.9622 12.8462 14.7498C12.8462 14.5371 12.9181 14.359 13.0617 14.2155C13.2056 14.0718 13.3837 14 13.596 14H17.4423C17.5193 14 17.5898 13.9679 17.6538 13.9038C17.7179 13.8398 17.75 13.7692 17.75 13.6923V10.2213C17.75 10.0087 17.8219 9.83058 17.9657 9.68675C18.1096 9.54308 18.2878 9.47125 18.5002 9.47125C18.7129 9.47125 18.891 9.54308 19.0345 9.68675C19.1782 9.83058 19.25 10.0087 19.25 10.2213V13.6923C19.25 14.1974 19.075 14.625 18.725 14.975C18.375 15.325 17.9474 15.5 17.4423 15.5ZM19.25 2.30775V6.52875C19.25 6.74125 19.1781 6.91942 19.0343 7.06325C18.8904 7.20692 18.7122 7.27875 18.4998 7.27875C18.2871 7.27875 18.1089 7.20692 17.9653 7.06325C17.8218 6.91942 17.75 6.74125 17.75 6.52875V2.30775C17.75 2.23075 17.7179 2.16025 17.6538 2.09625C17.5898 2.03208 17.5193 2 17.4423 2H13.596C13.3837 2 13.2056 1.92808 13.0617 1.78425C12.9181 1.64042 12.8462 1.46225 12.8462 1.24975C12.8462 1.03708 12.9181 0.859 13.0617 0.7155C13.2056 0.571833 13.3837 0.5 13.596 0.5H17.4423C17.9474 0.5 18.375 0.675 18.725 1.025C19.075 1.375 19.25 1.80258 19.25 2.30775Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function ProfileIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '18'}
      height={height || '18'}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.30775 17.5C1.80908 17.5 1.38308 17.3234 1.02975 16.9703C0.676583 16.6169 0.5 16.1909 0.5 15.6923V3.75C0.5 3.57433 0.524667 3.40958 0.574 3.25575C0.623334 3.10192 0.703833 2.959 0.8155 2.827L2.19625 1.1655C2.30775 1.027 2.43525 0.923166 2.57875 0.853999C2.72242 0.784666 2.88208 0.75 3.05775 0.75H14.9423C15.1179 0.75 15.2776 0.784666 15.4212 0.853999C15.5647 0.923166 15.6923 1.027 15.8038 1.1655L17.1845 2.827C17.2962 2.959 17.3767 3.10192 17.426 3.25575C17.4753 3.40958 17.5 3.57433 17.5 3.75V15.6923C17.5 16.1909 17.3234 16.6169 16.9703 16.9703C16.6169 17.3234 16.1909 17.5 15.6923 17.5H2.30775ZM2.4 3.25H15.6L14.75 2.25H3.25L2.4 3.25ZM2.30775 16H15.6923C15.7821 16 15.8558 15.9712 15.9135 15.9135C15.9712 15.8558 16 15.7821 16 15.6923V4.75H2V15.6923C2 15.7821 2.02883 15.8558 2.0865 15.9135C2.14417 15.9712 2.21792 16 2.30775 16ZM12.5655 10.5L11.0078 12.0578C10.8591 12.2064 10.7831 12.3856 10.7798 12.5953C10.7766 12.8048 10.8526 12.9871 11.0078 13.1423C11.1629 13.2974 11.3437 13.375 11.55 13.375C11.7563 13.375 11.9371 13.2974 12.0923 13.1423L14.102 11.1328C14.2827 10.9519 14.373 10.741 14.373 10.5C14.373 10.259 14.2827 10.0481 14.102 9.86725L12.0923 7.85775C11.9436 7.70908 11.7644 7.63308 11.5548 7.62975C11.3453 7.62658 11.1629 7.70258 11.0078 7.85775C10.8526 8.01292 10.775 8.19367 10.775 8.4C10.775 8.60633 10.8526 8.78708 11.0078 8.94225L12.5655 10.5ZM5.4845 10.5L7.04225 8.94225C7.19092 8.79358 7.26692 8.61442 7.27025 8.40475C7.27342 8.19525 7.19742 8.01292 7.04225 7.85775C6.88708 7.70258 6.70633 7.625 6.5 7.625C6.29367 7.625 6.11292 7.70258 5.95775 7.85775L3.948 9.86725C3.76733 10.0481 3.677 10.259 3.677 10.5C3.677 10.741 3.76733 10.9519 3.948 11.1328L5.95775 13.1423C6.10642 13.2909 6.28558 13.3669 6.49525 13.3703C6.70475 13.3734 6.88708 13.2974 7.04225 13.1423C7.19742 12.9871 7.275 12.8063 7.275 12.6C7.275 12.3937 7.19742 12.2129 7.04225 12.0578L5.4845 10.5Z"
        fill={color || 'black'}
      />
    </svg>
  );
}

export function RoadmapIcon({
  color,
  height,
  width,
}: {
  color?: string;
  height?: string;
  width?: string;
}) {
  return (
    <svg
      width={width || '14'}
      height={height || '20'}
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 14.725C8.64367 13.3403 9.88792 12.0025 10.7327 10.7115C11.5776 9.4205 12 8.21092 12 7.08275C12 5.59558 11.5333 4.37667 10.6 3.426C9.66667 2.47533 8.46667 2 7 2C5.53333 2 4.33333 2.47533 3.4 3.426C2.46667 4.37667 2 5.59558 2 7.08275C2 8.21092 2.42242 9.4205 3.26725 10.7115C4.11208 12.0025 5.35633 13.3403 7 14.725ZM7 16.1595C6.81283 16.1595 6.62833 16.1278 6.4465 16.0645C6.2645 16.001 6.09775 15.9058 5.94625 15.7788C4.13342 14.2571 2.7725 12.768 1.8635 11.3115C0.9545 9.85517 0.5 8.44558 0.5 7.08275C0.5 5.15958 1.10517 3.58167 2.3155 2.349C3.52567 1.11633 5.08717 0.5 7 0.5C8.91283 0.5 10.4743 1.11633 11.6845 2.349C12.8948 3.58167 13.5 5.15958 13.5 7.08275C13.5 8.44558 13.0455 9.85358 12.1365 11.3068C11.2275 12.7599 9.8665 14.2492 8.0535 15.7745C7.89983 15.9043 7.73267 16.001 7.552 16.0645C7.37117 16.1278 7.18717 16.1595 7 16.1595ZM7.00175 8.80775C7.49925 8.80775 7.92458 8.63058 8.27775 8.27625C8.63108 7.92192 8.80775 7.49592 8.80775 6.99825C8.80775 6.50075 8.63058 6.07542 8.27625 5.72225C7.92192 5.36892 7.49592 5.19225 6.99825 5.19225C6.50075 5.19225 6.07542 5.36942 5.72225 5.72375C5.36892 6.07808 5.19225 6.50408 5.19225 7.00175C5.19225 7.49925 5.36942 7.92458 5.72375 8.27775C6.07808 8.63108 6.50408 8.80775 7.00175 8.80775ZM1.25 19.5C1.0375 19.5 0.859417 19.4281 0.71575 19.2843C0.571917 19.1404 0.5 18.9622 0.5 18.7498C0.5 18.5371 0.571917 18.359 0.71575 18.2155C0.859417 18.0718 1.0375 18 1.25 18H12.75C12.9625 18 13.1406 18.0719 13.2843 18.2157C13.4281 18.3596 13.5 18.5378 13.5 18.7502C13.5 18.9629 13.4281 19.141 13.2843 19.2845C13.1406 19.4282 12.9625 19.5 12.75 19.5H1.25Z"
        fill={color || 'black'}
      />
    </svg>
  );
}