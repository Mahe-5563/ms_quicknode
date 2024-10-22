import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { nav_links } from '@/data/common';
import { Button } from '@mui/base';
import { deleteCookie, getAccentCode, getCookie, hoverHandler, loadAccentClass } from '@/operations/common';

export default function LeftNav({
  nav_bar_width,
  setNav_bar_width,
}: {
  nav_bar_width: string;
  setNav_bar_width: Dispatch<SetStateAction<string>>;
}) {
  const currentpage = usePathname();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const [theme_accent_present, setTheme_accent_present] = useState<string | boolean | null>();
  const [active_link, setActive_link] = useState<string>('');
  const [is_profile, setIs_profile] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    checkNavBarWidth();
    loadAccentClass(setTheme_accent_present);
    checkProfileDetails();
    getUserCookie();
  }, []);

  useEffect(() => {
    if (theme_accent_present) {
      setActive_link(getAccentCode(theme_accent_present));
    } else {
      setActive_link('#8765CC');
    }
  }, [theme_accent_present]);

  function checkNavBarWidth() {
    if(localStorage.getItem("nav_bar_width")) {
      setNav_bar_width(localStorage.getItem("nav_bar_width") || "lg")
    }
  }

  function getUserCookie() {
    const is_user = getCookie("user");
    if(is_user != "") {
      setUser(JSON.parse(window.atob(is_user)));
    }
  }

  function checkProfileDetails() {
    const parsedData =
      localStorage.getItem('profile_details') &&
      JSON.parse(localStorage.getItem('profile_details') || '');
    if (parsedData) setIs_profile(true);
  }

  return (
    <nav className={`h-screen fixed z-30 border-r py-4 ${nav_bar_width == "lg" ? "w-72" : "w-16"} dark:bg-black dark:text-white dark:border-gray-500`}>
      {theme && (
        <Fragment>
          {/* Feature to compress or expand the nav bar. */}
          {/* <button 
            className='absolute bg-zinc-600 text-white bottom-10 -right-7 z-20 py-5 px-2 rounded-r-2xl'
            onClick={() => {
              if(nav_bar_width == "sm"){
                setNav_bar_width("lg")
                localStorage.setItem("nav_bar_width", "lg");
              }
              else{
                setNav_bar_width("sm")
                localStorage.setItem("nav_bar_width", "sm");
              }
            }}
          >
            {nav_bar_width == "lg" ? "<" : ">"}
          </button> */}
          <section>
            <Link href={'/home'} className="flex justify-center">
              <Image
                src={nav_bar_width == "sm" ? "/icons/dark/ms_chat_logo.svg" : theme == 'dark' ? `/icons/dark/ms-logo.svg` : `/icons/light/ms-logo.svg`}
                alt="mystartup logo"
                width={nav_bar_width == "sm" ? 50 : 170}
                height={40}
              />
            </Link>
          </section>
          <section className="my-2 flex flex-col gap-2">
            {nav_links.map((link) => {
              const is_current_link = currentpage.includes(link.id) || link.url == currentpage;
              const profile_not_present =
                !is_profile && link.id != 'home' && link.id != 'profile';
              return (
                <Link
                  id={`nav_link_${link.id}`}
                  key={`nav_link_${link.id}`}
                  className={`flex items-center mx-3 py-2 ${nav_bar_width == "lg" ? "px-4" : "px-2.5"} rounded-md`}
                  href={link.url}
                  aria-disabled={profile_not_present}
                  tabIndex={profile_not_present ? -1 : 1}
                  title={link.label}
                  style={{
                    backgroundColor: is_current_link ? active_link : '',
                    color: profile_not_present
                      ? theme == 'dark'
                        ? '#71717A'
                        : '#A1A1AA'
                      : is_current_link || theme == 'light'
                        ? '#000'
                        : '#fff',
                    pointerEvents: profile_not_present ? 'none' : 'auto',
                  }}
                  onMouseOver={() =>
                    !profile_not_present &&
                    hoverHandler(
                      `nav_link_${link.id}`,
                      is_current_link ? active_link : '#D4D4D8',
                      'mouse_over',
                    )
                  }
                  onMouseOut={() =>
                    !profile_not_present &&
                    hoverHandler(
                      `nav_link_${link.id}`,
                      is_current_link ? active_link : '',
                      'mouse_out',
                    )
                  }
                >
                  <div className="mr-2 w-6">
                    {link.path(
                      profile_not_present
                        ? '#71717A'
                        : is_current_link || theme == 'light'
                          ? '#000000'
                          : '#FFFFFF',
                    )}
                  </div>
                  {nav_bar_width == "lg" && <label className="align-middle text-sm">{link.label}</label>}
                </Link>
              );
            })}
          </section>
          <section className="absolute w-full bottom-0">
            <div className={`${nav_bar_width == "lg" ? "mx-4" : "flex-col gap-2"} flex justify-evenly py-4 border-b dark:border-gray-500`}>
              <Button
                id="nav_theme_switch_light"
                className={`flex items-center text-sm ${nav_bar_width == "lg" ? "px-5" : "px-2.5 mx-auto"} py-2 rounded-md`}
                onClick={() => setTheme('light')}
                style={{ backgroundColor: theme == 'light' ? active_link : '' }}
                onMouseOver={() =>
                  hoverHandler(
                    `nav_theme_switch_light`,
                    theme == 'light' ? active_link : '#D4D4D8',
                    'mouse_over',
                  )
                }
                onMouseOut={() =>
                  hoverHandler(
                    `nav_theme_switch_light`,
                    theme == 'light' ? active_link : '',
                    'mouse_out',
                  )
                }
              >
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={nav_bar_width == "lg" ? 'mr-2' : ""}
                >
                  <path
                    d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.7513 16.5 9.68917 16.0622 8.8135 15.1865C7.93783 14.3108 7.5 13.2487 7.5 12C7.5 10.7513 7.93783 9.68917 8.8135 8.8135C9.68917 7.93783 10.7513 7.5 12 7.5C13.2487 7.5 14.3108 7.93783 15.1865 8.8135C16.0622 9.68917 16.5 10.7513 16.5 12C16.5 13.2487 16.0622 14.3108 15.1865 15.1865C14.3108 16.0622 13.2487 16.5 12 16.5ZM2 12.75C1.7875 12.75 1.60942 12.6781 1.46575 12.5343C1.32192 12.3904 1.25 12.2122 1.25 11.9998C1.25 11.7871 1.32192 11.609 1.46575 11.4655C1.60942 11.3218 1.7875 11.25 2 11.25H4.25C4.4625 11.25 4.64067 11.3219 4.7845 11.4658C4.92817 11.6096 5 11.7878 5 12.0003C5 12.2129 4.92817 12.391 4.7845 12.5345C4.64067 12.6782 4.4625 12.75 4.25 12.75H2ZM19.75 12.75C19.5375 12.75 19.3593 12.6781 19.2155 12.5343C19.0718 12.3904 19 12.2122 19 11.9998C19 11.7871 19.0718 11.609 19.2155 11.4655C19.3593 11.3218 19.5375 11.25 19.75 11.25H22C22.2125 11.25 22.3906 11.3219 22.5343 11.4658C22.6781 11.6096 22.75 11.7878 22.75 12.0003C22.75 12.2129 22.6781 12.391 22.5343 12.5345C22.3906 12.6782 22.2125 12.75 22 12.75H19.75ZM11.9998 5C11.7871 5 11.609 4.92817 11.4655 4.7845C11.3218 4.64067 11.25 4.4625 11.25 4.25V2C11.25 1.7875 11.3219 1.60942 11.4658 1.46575C11.6096 1.32192 11.7878 1.25 12.0003 1.25C12.2129 1.25 12.391 1.32192 12.5345 1.46575C12.6782 1.60942 12.75 1.7875 12.75 2V4.25C12.75 4.4625 12.6781 4.64067 12.5343 4.7845C12.3904 4.92817 12.2122 5 11.9998 5ZM11.9998 22.75C11.7871 22.75 11.609 22.6781 11.4655 22.5343C11.3218 22.3906 11.25 22.2125 11.25 22V19.75C11.25 19.5375 11.3219 19.3593 11.4658 19.2155C11.6096 19.0718 11.7878 19 12.0003 19C12.2129 19 12.391 19.0718 12.5345 19.2155C12.6782 19.3593 12.75 19.5375 12.75 19.75V22C12.75 22.2125 12.6781 22.3906 12.5343 22.5343C12.3904 22.6781 12.2122 22.75 11.9998 22.75ZM6.00575 7.0405L4.748 5.81725C4.59933 5.67875 4.52758 5.50475 4.53275 5.29525C4.53792 5.08558 4.61067 4.90317 4.751 4.748C4.90417 4.593 5.084 4.5155 5.2905 4.5155C5.49683 4.5155 5.67242 4.593 5.81725 4.748L7.05 5.99625C7.19483 6.15125 7.26725 6.32683 7.26725 6.523C7.26725 6.71917 7.19642 6.89483 7.05475 7.05C6.91308 7.20517 6.74167 7.27858 6.5405 7.27025C6.33917 7.26192 6.16092 7.18533 6.00575 7.0405ZM18.1828 19.252L16.95 18.0038C16.8052 17.8488 16.7327 17.6706 16.7327 17.4693C16.7327 17.2679 16.8052 17.0948 16.95 16.95C17.0853 16.7948 17.2544 16.7214 17.4573 16.7298C17.6601 16.7381 17.8391 16.8147 17.9943 16.9595L19.252 18.1828C19.4007 18.3213 19.4724 18.4953 19.4673 18.7048C19.4621 18.9144 19.3893 19.0968 19.249 19.252C19.0958 19.407 18.916 19.4845 18.7095 19.4845C18.5032 19.4845 18.3276 19.407 18.1828 19.252ZM16.95 7.05475C16.7948 6.91308 16.7214 6.74167 16.7298 6.5405C16.7381 6.33917 16.8147 6.16092 16.9595 6.00575L18.1828 4.748C18.3213 4.59933 18.4953 4.52758 18.7048 4.53275C18.9144 4.53792 19.0968 4.61067 19.252 4.751C19.407 4.90417 19.4845 5.084 19.4845 5.2905C19.4845 5.49683 19.407 5.67242 19.252 5.81725L18.0038 7.05C17.8488 7.19483 17.6732 7.26725 17.477 7.26725C17.2808 7.26725 17.1052 7.19642 16.95 7.05475ZM4.748 19.254C4.593 19.0975 4.5155 18.916 4.5155 18.7095C4.5155 18.5032 4.593 18.3276 4.748 18.1828L5.99625 16.95C6.15125 16.8052 6.32942 16.7327 6.53075 16.7327C6.73208 16.7327 6.90517 16.8052 7.05 16.95C7.19867 17.0853 7.26883 17.2544 7.2605 17.4573C7.25217 17.6601 7.17883 17.8391 7.0405 17.9943L5.81725 19.252C5.67242 19.407 5.49683 19.482 5.2905 19.477C5.084 19.4718 4.90317 19.3975 4.748 19.254Z"
                    fill={theme == 'light' ? '#000' : '#FFF'}
                  />
                </svg>
                {nav_bar_width == "lg" && <span>Light</span>}
              </Button>
              <Button
                id="nav_theme_switch_dark"
                className={`flex items-center text-sm ${nav_bar_width == "lg" ? "px-5" : "px-2.5 mx-auto"} py-2 rounded-md ${theme == 'dark' ? 'text-black' : ''}`}
                onClick={() => setTheme('dark')}
                style={{ backgroundColor: theme == 'dark' ? active_link : '' }}
                onMouseOver={() =>
                  hoverHandler(
                    `nav_theme_switch_dark`,
                    theme == 'dark' ? active_link : '#D4D4D8',
                    'mouse_over',
                  )
                }
                onMouseOut={() =>
                  hoverHandler(
                    `nav_theme_switch_dark`,
                    theme == 'dark' ? active_link : '',
                    'mouse_out',
                  )
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={nav_bar_width == "lg" ? 'mr-2' : ""}
                >
                  <path
                    d="M9.02905 17.4991C6.65988 17.4991 4.65096 16.6748 3.0023 15.0261C1.35363 13.3773 0.529297 11.3683 0.529297 8.99915C0.529297 7.02615 1.1398 5.27231 2.3608 3.73765C3.58196 2.20298 5.20855 1.2139 7.24055 0.770398C7.45088 0.717731 7.63613 0.722815 7.7963 0.785649C7.95663 0.848482 8.0868 0.942065 8.1868 1.0664C8.2868 1.1909 8.3458 1.3419 8.3638 1.5194C8.38163 1.6969 8.33996 1.87415 8.2388 2.05115C8.0323 2.42682 7.87905 2.81706 7.77905 3.2219C7.67905 3.62673 7.62905 4.05248 7.62905 4.49915C7.62905 6.13798 8.20271 7.53107 9.35005 8.6784C10.4972 9.82557 11.8902 10.3991 13.529 10.3991C14.0202 10.3991 14.4895 10.337 14.9368 10.2126C15.3843 10.0883 15.776 9.94407 16.1118 9.7799C16.276 9.70823 16.4362 9.6829 16.5925 9.7039C16.749 9.72507 16.8825 9.77732 16.993 9.86065C17.1159 9.94398 17.207 10.0578 17.2665 10.2021C17.3262 10.3463 17.333 10.5158 17.2868 10.7106C16.9316 12.6773 15.9749 14.3004 14.4165 15.5799C12.8582 16.8594 11.0624 17.4991 9.02905 17.4991ZM9.02905 15.9991C10.4957 15.9991 11.8124 15.595 12.979 14.7866C14.1457 13.9783 14.9957 12.9241 15.529 11.6241C15.1957 11.7075 14.8624 11.7741 14.529 11.8241C14.1957 11.8741 13.8624 11.8991 13.529 11.8991C11.479 11.8991 9.73321 11.1783 8.29155 9.73665C6.84988 8.29498 6.12905 6.54915 6.12905 4.49915C6.12905 4.16581 6.15405 3.83248 6.20405 3.49915C6.25405 3.16581 6.32071 2.83248 6.40405 2.49915C5.10405 3.03248 4.04988 3.88248 3.24155 5.04915C2.43321 6.21581 2.02905 7.53248 2.02905 8.99915C2.02905 10.9325 2.71238 12.5825 4.07905 13.9491C5.44571 15.3158 7.09571 15.9991 9.02905 15.9991Z"
                    fill="#000000"
                  />
                </svg>
                {nav_bar_width == "lg" && <span>Dark</span>}
              </Button>
            </div>
            <div className={`p-4 ${nav_bar_width == "lg" ? "grid grid-cols-5 gap-2": ""}`}>
              <div>
                <Image
                  src={'/images/user-icon.svg'}
                  alt="user"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </div>
              {nav_bar_width == "lg" && <div className="col-span-3">
                <h4 
                  className="text-xs font-medium text-ellipsis overflow-hidden"
                  title={user?.name || "John Doe"}
                >
                  {user?.name || "John Doe"}
                </h4>
                <h5 
                  className="text-xs text-ellipsis overflow-hidden"
                  title={user?.emailid || "johndoe@mystartup.ai"}
                >
                  {user?.emailid || "johndoe@mystartup.ai"}
                </h5>
              </div>}
              {nav_bar_width == "lg" && 
                <Button
                  className="my-auto ml-auto"
                  onClick={() => {
                    deleteCookie("user");
                    router.push('/');
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 8V10L15 10V13L20 9L15 5V8L6 8Z"
                      fill={theme == 'dark' ? '#FFFFFF' : '#000000'}
                    />
                    <path
                      d="M2 18H11C12.103 18 13 17.103 13 16V12H11V16L2 16L2 2H11V6H13V2C13 0.896999 12.103 0 11 0H2C0.897 0 0 0.896999 0 2L0 16C0 17.103 0.897 18 2 18Z"
                      fill={theme == 'dark' ? '#FFFFFF' : '#000000'}
                    />
                  </svg>
                </Button>
              }
            </div>
          </section>
        </Fragment>
      )}
    </nav>
  );
}
