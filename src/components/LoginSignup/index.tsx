'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import FormInput from '../FormComponents/FormInput';
import CTAButton from '../ButtonCTA';
import { LoginSignupFormProps, LoginSignupProps } from '@/interfaces';
import {
  checkEmailValidity,
  checkOnlyCharacters,
  checkValuesObject,
  // getCookie,
  setCookie,
} from '@/operations/common';

export default function LoginSignup({ type }: LoginSignupProps) {
  const {
    theme,
    // setTheme,
  } = useTheme();
  const router = useRouter();
  const [form_account, setForm_account] = useState<LoginSignupFormProps>({
    name: '',
    emailid: '',
    password: '',
    confirmpwd: '',
  });
  const [form_error, setForm_error] = useState<LoginSignupFormProps>({
    name: '',
    emailid: '',
    password: '',
    confirmpwd: '',
  });

  useEffect(() => {
    // window.addEventListener("load", checkEmptyValue);
    // window.addEventListener('keydown', handleEnter)
    // return () => window.removeEventListener('keydown', handleEnter);
    // return () => window.removeEventListener('load', checkEmptyValue);
  }, [])

  // const checkEmptyValue = () => {
  //   if(getCookie("user") != "") {
  //     router.push("/home");
  //   }
  // }

  // const handleEnter = (ev: any) => {
  //   if(ev.code == "Enter") {
  //     loginSignupHandler();
  //   }
  // }

  const loginSignupHandler = () => {
    let temp: LoginSignupFormProps = {
      name: '',
      emailid: '',
      password: '',
      confirmpwd: '',
    };
    switch (type) {
      case 'login':
        temp = {
          emailid: !form_account.emailid ? form_error.emailid || 'Please enter your Email ID' : '',
          password: !form_account.password
            ? form_error.password || 'Please enter your password'
            : '',
        };
        break;
      case 'signup':
        temp = {
          name: !form_account.name ? form_error.name || 'Please enter your name' : '',
          emailid: !form_account.emailid ? form_error.emailid || 'Please enter your Email ID' : '',
          password: !form_account.password
            ? form_error.password || 'Please enter your password'
            : '',
          confirmpwd: !form_account.confirmpwd
            ? form_error.confirmpwd || 'Please confirm your password'
            : '',
        };
        break;
      default:
        break;
    }

    setForm_error(temp);
    if (checkValuesObject(temp)) {
      setCookie('user', window.btoa(JSON.stringify(form_account)));
      router.push('/home');
    }
  };

  useEffect(() => {
    setForm_account({ name: '', emailid: '', password: '', confirmpwd: '' });
    setForm_error({ name: '', emailid: '', password: '', confirmpwd: '' });
  }, [type]);

  return (
    <div className="grid grid-cols-2 dark:bg-black">
      <section className="h-screen grid dark:text-white">
        <Image
          src={theme == 'dark' ? `/icons/dark/ms-logo.svg` : `/icons/light/ms-logo.svg`}
          alt="MS Logo"
          width={150}
          height={150}
          className="m-3"
        />
        <div className="w-3/5 mx-auto">
          <h1 className="text-2xl font-bold text-center">
            {type == 'signup' ? 'Create your Account' : 'Log in'}
          </h1>
          <h6 className="text-xs text-center">
            {type == 'signup'
              ? "Let's get started with your 30-day trial"
              : 'Welcome back! Please enter your details.'}
          </h6>
          <form onSubmitCapture={loginSignupHandler}>
            {type.toLowerCase() == 'signup' && (
              <FormInput
                type={'text'}
                onChange={(e) => {
                  setForm_account({
                    ...form_account,
                    name: e.target.value,
                  });
                }}
                label={'Name'}
                placeholder={'Enter your name'}
                onBlur={() => {
                  if (form_account.name) {
                    setForm_error({
                      ...form_error,
                      name: !checkOnlyCharacters(form_account.name)
                        ? 'Invalid characters found in your name'
                        : '',
                    });
                  }
                }}
                error_message={form_error.name}
              />
            )}
            <FormInput
              type={'email'}
              onChange={(e) => {
                setForm_account({
                  ...form_account,
                  emailid: e.target.value,
                });
              }}
              label={'Email ID'}
              placeholder={'Enter your Email address'}
              onBlur={() => {
                if (form_account.emailid) {
                  setForm_error({
                    ...form_error,
                    emailid: !checkEmailValidity(form_account.emailid) ? 'Invalid email id' : '',
                  });
                }
              }}
              error_message={form_error.emailid}
            />
            <FormInput
              type={'password'}
              onChange={(e) => {
                setForm_account({
                  ...form_account,
                  password: e.target.value,
                });
              }}
              label={'Password'}
              placeholder={'Enter your password'}
              error_message={form_error.password}
              onBlur={() => {
                if (form_account.password) {
                  setForm_error({
                    ...form_error,
                    password:
                      form_account.password.length < 8
                        ? 'Password must be minimum of 8 characters'
                        : '',
                  });

                  if (type.toLowerCase() == 'signup') {
                    setForm_error({
                      ...form_error,
                      confirmpwd:
                        form_account.confirmpwd != form_account.password
                          ? 'Passwords do not match!'
                          : '',
                    });
                  }
                }
              }}
            />
            {type.toLowerCase() == 'signup' && (
              <FormInput
                type={'password'}
                onChange={(e) => {
                  setForm_account({
                    ...form_account,
                    confirmpwd: e.target.value,
                  });
                }}
                label={'Confirm Password'}
                placeholder={'Re-enter your password'}
                error_message={form_error.confirmpwd}
                onBlur={() => {
                  if (form_account.confirmpwd) {
                    setForm_error({
                      ...form_error,
                      confirmpwd:
                        form_account.password != form_account.confirmpwd
                          ? 'Passwords do not match!'
                          : '',
                    });
                  }
                }}
              />
            )}
            <CTAButton
              id={`login_signup`}
              btn_label={type == 'signup' ? 'Get Started' : 'Log in'}
              onClick={loginSignupHandler}
              btn_type={'-'}
              btn_class="w-full mt-3"
            />
            {type.toLowerCase() == 'signup' && (
              <p className="text-xs text-center my-2">
                {'Already have an account? '}
                <Link href={'/login'} className="text-accent font-bold">
                  Login
                </Link>
              </p>
            )}
            {type.toLowerCase() == 'login' && (
              <p className="text-xs text-center my-2">
                {"Don't have an account? "}
                <Link href={'/create-your-account'} className="text-accent font-bold">
                  Create your account
                </Link>
              </p>
            )}
          </form>
        </div>
      </section>
      <section className="h-screen pt-12 pl-12 bg-[#F2F4F7] relative">
        <div className="pr-16 mb-4 text-black">
          <h2 className="text-2xl font-bold">Start turning your ideas into reality</h2>
          <p className="text-xs my-2">
            An intuitive platform that streamlines business plan creation, preparing you for
            successful investment. Trusted by over 5,000 professionals.
          </p>
          <div className="flex gap-2">
            <Image src={'/images/img-usersloginpage.png'} height={80} width={150} alt="users" />
            <div>
              <Image src={'/images/img-5star.png'} height={120} width={120} alt="star" />
              <p className="text-sm">5.0 reviews</p>
            </div>
          </div>
        </div>
        <Image
          src={'/images/img-loginpage.png'}
          width={600}
          height={100}
          alt="loginpage image"
          className="ml-auto"
        />
      </section>
    </div>
  );
}
