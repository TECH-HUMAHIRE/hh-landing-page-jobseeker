import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '@public/icons/jobseeker.svg';
import { ReactNode } from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import { useRouter } from 'next/router';
import ForgotPasswordScreen from './ForgotPasswordScreen';

type IHeader = {
  children?: ReactNode;
};

const Header: React.FC<IHeader> = () => {
  const router = useRouter();
  // typeof window !== 'undefined' && localStorage.getItem('token')
  const [haveToken, setHaveToken] = useState<boolean>(false);
  const [isForgot, setForgot] = useState<boolean>(false);
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };
  const showModalForgotPassword: any = () => {
    router.push('/');
    setForgot(!isForgot);
  };
  useEffect(() => {
    // Perform localStorage action
    setHaveToken(localStorage.getItem('token') ? true : false);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (router?.query?.logout === 'true') {
        localStorage.removeItem('token');
        setHaveToken(false);
        router.push('/');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
  return (
    <>
      <header className="shadow-lg fixed left-0 z-20 right-0 top-0 bg-white py-[28px] container w-100 items-center">
        <nav className="flex flex-row items-center justify-between">
          <Link passHref href="/">
            <Logo></Logo>
          </Link>
          <ul className="inline-flex flex-row items-center">
            <li className="mr-[34px]">
              <div
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => scrollToElement('how-it-work')}
              >
                How it work
              </div>
            </li>
            <li className="mr-[34px]">
              <div
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => scrollToElement('testimony')}
              >
                Testimony
              </div>
            </li>
            <li className="mr-[34px]">
              <div
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => scrollToElement('service')}
              >
                Services
              </div>
            </li>
            <li className="mr-[34px]">
              <div
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => scrollToElement('FAQ')}
              >
                FAQ
              </div>
            </li>
            <li className="mr-[34px]">
              <div
                className="text-[16px] font-semibold cursor-pointer"
                onClick={() => scrollToElement('contact-us')}
              >
                Contact Us
              </div>
            </li>
            {haveToken ? (
              <li className="mr-[34px]">
                <a
                  className="inline-flex text-white text-center items-center justify-center font-bold text-[14px] bg-primary rounded-[8px] w-[180px] h-[40px]"
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`}
                >
                  Continue Dashboard
                </a>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </header>
      {!haveToken && (
        <>
          <LoginScreen
            showModalForgotPassword={showModalForgotPassword}
          ></LoginScreen>
          <RegisterScreen></RegisterScreen>
          <ForgotPasswordScreen
            isOpen={isForgot}
            showModalForgotPassword={showModalForgotPassword}
          ></ForgotPasswordScreen>
        </>
      )}
    </>
  );
};

export default Header;
