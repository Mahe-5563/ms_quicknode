import { useState, useEffect, ChangeEvent } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { useTheme } from 'next-themes';
import CTAButton from './ButtonCTA';
import { getAccentCode, loadAccentClass } from '@/operations/common';

type PaginationProps = {
  onChange: (ev: ChangeEvent<unknown>, page: number) => void;
  total_pages: number;
  page_number: number;
};

export default function PaginationComponent({
  onChange,
  total_pages,
  page_number,
}: PaginationProps) {
  const { theme } = useTheme();
  const [current_page, setCurrent_page] = useState<number>(1);
  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [accent_theme, setAccent_theme] = useState<string>('');

  useEffect(() => {
    loadAccentClass(setTheme_accent_present);
  }, []);

  useEffect(() => {
    if (theme_accent_present) {
      setAccent_theme(getAccentCode(theme_accent_present));
    }
  }, [theme_accent_present]);

  useEffect(() => {
    setCurrent_page(page_number);
  }, [page_number]);

  const pagination_styles = {
    '.Mui-selected': {
      bgcolor: `${accent_theme}80 !important`,
      border: `1px solid ${accent_theme} !important`,
      color: '#000 !important',
    },
    '.MuiPaginationItem-root': {
      color: theme == 'dark' ? '#FFFFFF' : '#000000',
    },
    '.MuiPaginationItem-root:hover': {
      bgcolor: theme == "dark" ? "#1E1E1E" : "#D4D4D8",
      // color: theme == 'dark' ? '#FFFFFF' : '#000000',
    },
  };

  const BackButton = () => (
    <CTAButton
      id={`page_go_back`}
      onClick={() => setCurrent_page(current_page - 1)}
      btn_type="transp"
      btn_label="Previous"
      icon={
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
        >
          <path
            d="M2.38724 5.99559L6.46048 10.0686C6.59882 10.2071 6.66965 10.3812 6.67298 10.5908C6.67615 10.8003 6.60532 10.9776 6.46048 11.1226C6.31548 11.2674 6.13982 11.3398 5.93348 11.3398C5.72715 11.3398 5.55148 11.2674 5.40648 11.1226L0.912235 6.62834C0.818735 6.53468 0.752734 6.43593 0.714234 6.33209C0.675734 6.22826 0.656484 6.11609 0.656484 5.99559C0.656484 5.87509 0.675734 5.76293 0.714234 5.65909C0.752734 5.55526 0.818735 5.45651 0.912235 5.36284L5.40648 0.868592C5.54498 0.730259 5.71907 0.659426 5.92873 0.656093C6.13823 0.652926 6.31548 0.72376 6.46048 0.868592C6.60532 1.01359 6.67773 1.18926 6.67773 1.39559C6.67773 1.60193 6.60532 1.77759 6.46048 1.92259L2.38724 5.99559Z"
            fill={theme == 'dark' ? '#FFFFFF' : '#1E1E1E'}
          />
        </svg>
      }
    />
  );
  const ForwardButton = () => (
    <CTAButton
      id={`page_go_forward`}
      icon_after
      onClick={() => setCurrent_page(current_page + 1)}
      btn_type="transp"
      btn_label="Next"
      icon={
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="my-auto"
        >
          <path
            d="M4.94675 6.0005L0.8735 1.9275C0.735167 1.789 0.664333 1.61492 0.661 1.40525C0.657833 1.19575 0.728667 1.0185 0.8735 0.8735C1.0185 0.728667 1.19417 0.65625 1.4005 0.65625C1.60683 0.65625 1.7825 0.728667 1.9275 0.8735L6.42175 5.36775C6.51525 5.46142 6.58125 5.56017 6.61975 5.664C6.65825 5.76783 6.6775 5.88 6.6775 6.0005C6.6775 6.121 6.65825 6.23317 6.61975 6.337C6.58125 6.44083 6.51525 6.53958 6.42175 6.63325L1.9275 11.1275C1.789 11.2658 1.61492 11.3367 1.40525 11.34C1.19575 11.3432 1.0185 11.2723 0.8735 11.1275C0.728667 10.9825 0.65625 10.8068 0.65625 10.6005C0.65625 10.3942 0.728667 10.2185 0.8735 10.0735L4.94675 6.0005Z"
            fill={theme == 'light' ? '#000000' : '#FFFFFF'}
          />
        </svg>
      }
    />
  );

  return (
    <Pagination
      count={total_pages}
      // color={`${theme == "dark" ? "primary" : "secondary"}`}
      variant="outlined"
      shape="rounded"
      boundaryCount={2}
      siblingCount={1}
      page={current_page}
      onChange={onChange}
      renderItem={(item) => (
        <PaginationItem slots={{ previous: BackButton, next: ForwardButton }} {...item} />
      )}
      className="my-4"
      sx={pagination_styles}
    />
  );
}
