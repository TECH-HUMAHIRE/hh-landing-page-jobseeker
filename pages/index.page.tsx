import Layout from '@components/Layouts';
import { useState, useEffect } from 'react';
import HomeSectionWork from './home/HomeSectionWork';
import HomeSectionTestimonial from './home/HomeSectionTestimonial';
import OvalRed from '@public/icons/oval-red.svg';
import OvalYellow from '@public/icons/oval-yellow.svg';
import ArrowBottom from '@public/icons/arrow-bottom.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HomeSectionService from './home/HomeSectionService';
import HomeSectionFaq from './home/HomeSectionFaq';
import HomeSectionQuestions from './home/HomeSectionQuestions';

export default function Home() {
  const router = useRouter();
  const [faqNumber, setFaqNumber] = useState<number>(0);
  const onSetFAQ = (currentNumber: number): void => {
    setFaqNumber(currentNumber === faqNumber ? 0 : currentNumber);
  };

  const [haveToken, setHaveToken] = useState<boolean>(false);
  useEffect(() => {
    // Perform localStorage action
    setHaveToken(localStorage.getItem('token') ? true : false);
  }, []);

  useEffect(() => {
    if (router.isReady) {
      if (router?.query?.logout === 'true') {
        setHaveToken(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return (
    <Layout>
      <section className="h-screen container pt-[120px]">
        <div className="w-100 flex flex-row">
          <div className="w-[55%] inline-flex flex-col">
            <div className="flex mt-[20px] flex-col">
              <h1 className="m-0 font-bold w-100 text-black text-[64px]">
                Join us now!
              </h1>
              <h4 className="font-normal text-black text-[48px]">
                Refer and start earning.
              </h4>
              <p className="w-[89%] mt-[20px] text-[20px] font-normal text-dark-grey">
                Earn full time income with part time effort. Set your own
                flexible hours. The only investment you need is your network.
              </p>
            </div>
            <div className="flex flex-row mt-[40px]">
              {!haveToken ? (
                <>
                  {' '}
                  <Link
                    href={{
                      pathname: '/',
                      query: { page: 'sign-in' },
                    }}
                    className="mr-[20px] inline-flex items-center justify-center bg-white border border-primary font-bold text-[14px] text-primary rounded-[8px] w-[180px] h-[40px]"
                  >
                    Sign In
                  </Link>
                  <Link
                    href={{
                      pathname: '/',
                      query: { page: 'register' },
                    }}
                    className="text-center inline-flex items-center justify-center text-white font-bold text-[14px] bg-primary rounded-[8px] w-[180px] h-[40px]"
                  >
                    Sign Up
                  </Link>{' '}
                </>
              ) : (
                <a
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`}
                  className="text-center inline-flex items-center justify-center text-white font-bold text-[14px] bg-primary rounded-[8px] w-[180px] h-[40px]"
                >
                  Go To Dashboard
                </a>
              )}
            </div>
          </div>
          <div className="w-[45%] inline-flex">
            <div className="block w-100">
              <img src="/images/recruiter.png" alt="recruiter top"></img>
            </div>
          </div>
        </div>
      </section>
      <HomeSectionWork></HomeSectionWork>
      <HomeSectionTestimonial></HomeSectionTestimonial>

      <section className="relative w-100 bg-primary pt-[74px] pb-[74px]">
        <div className="absolute left-0 top-0">
          <OvalRed></OvalRed>
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[60%]">
              <h4 className="font-bold text-[40px] mb-0 text-white">
                Hurry up, register now!
              </h4>
              <p className="font-normal text-[20px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                quis sollicitudin eu blandit diam. Ultrices nulla ut ullamcorper
                euismod tortor. Ornare in at phasellus.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-[-20px] top-[-20px]">
                <span className="w-[40px] h-[40px] rounded-full bg-red inline-flex"></span>
              </div>

              {!haveToken ? (
                <Link
                  href={{
                    pathname: '/',
                    query: { page: 'register' },
                  }}
                  className="inline-flex items-center justify-center text-primary font-bold text-[14px] bg-white rounded-[8px] w-[290px] h-[64px] relative"
                >
                  Register Now
                </Link>
              ) : (
                <a
                  href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}`}
                  className="inline-flex items-center justify-center text-primary font-bold text-[14px] bg-white rounded-[8px] w-[290px] h-[64px] relative"
                >
                  Go To Dashboard
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0">
          <OvalYellow></OvalYellow>
        </div>
      </section>
      <HomeSectionService></HomeSectionService>
      <HomeSectionFaq></HomeSectionFaq>
      <HomeSectionQuestions></HomeSectionQuestions>
    </Layout>
  );
}
