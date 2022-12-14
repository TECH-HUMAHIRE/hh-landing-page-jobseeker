import Link from 'next/link';
import Logo from '@public/icons/recruiter.svg';
import { ReactNode } from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

type IHeader = {
  children?: ReactNode;
};

const Header: React.FC<IHeader> = () => {
  return (
    <>
      <header className="shadow-lg fixed left-0 z-20 right-0 top-0 bg-white py-[28px] container w-100 items-center">
        <nav className="flex flex-row items-center justify-between">
          <Link passHref href="/">
            <Logo></Logo>
          </Link>
          <ul className="inline-flex flex-row items-center">
            <li className="mr-[34px]">
              <Link className="text-[16px] font-semibold" href="/">
                How it work
              </Link>
            </li>
            <li className="mr-[34px]">
              <Link className="text-[16px] font-semibold" href="/about">
                Testimony
              </Link>
            </li>
            <li className="mr-[34px]">
              <Link
                className="text-[16px] font-semibold"
                href="/blog/hello-world"
              >
                Services
              </Link>
            </li>
            <li className="mr-[34px]">
              <Link
                className="text-[16px] font-semibold"
                href="/blog/hello-world"
              >
                FAQ
              </Link>
            </li>
            <li className="mr-[34px]">
              <Link
                className="text-[16px] font-semibold"
                href="/blog/hello-world"
              >
                Contact Us
              </Link>
            </li>
            <li className="mr-[34px]">
              <Link
                className="text-[16px] font-semibold"
                href={{
                  pathname: '/',
                  query: { page: 'sign-in' },
                }}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: '/',
                  query: { page: 'register' },
                }}
                className="inline-flex text-white text-center items-center justify-center font-bold text-[14px] bg-primary rounded-[8px] w-[180px] h-[40px]"
              >
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <LoginScreen></LoginScreen>
      <RegisterScreen></RegisterScreen>
    </>
  );
};

export default Header;
