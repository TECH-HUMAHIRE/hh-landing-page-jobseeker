import Layout from '@components/Layouts';
import { useState } from 'react';
import HomeSectionWork from './home/HomeSectionWork';
import OvalRed from '@public/icons/oval-red.svg';
import OvalYellow from '@public/icons/oval-yellow.svg';
import ArrowBottom from '@public/icons/arrow-bottom.svg';
import Link from 'next/link';

export default function Home() {
  const [faqNumber, setFaqNumber] = useState<number>(0);
  const onSetFAQ = (currentNumber: number): void => {
    setFaqNumber(currentNumber === faqNumber ? 0 : currentNumber);
  };

  return (
    <Layout>
      <section className="h-screen container pt-[120px]">
        <div className="w-100 flex flex-row">
          <div className="w-[55%] inline-flex flex-col">
            <div className="flex mt-[20px] flex-col">
              <h1 className="m-0 font-bold w-100 text-black text-[64px]">
                Hire More Effectively
              </h1>
              <h4 className="font-normal text-black text-[48px]">
                Through Crowdsourcing
              </h4>
              <p className="w-[89%] mt-[20px] text-[20px] font-normal text-dark-grey">
                Earn full time income with part time effort. Set your own
                flexible hours. The only investment you need is your network.
              </p>
            </div>
            <div className="flex flex-row mt-[40px]">
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
              </Link>
            </div>
          </div>
          <div className="w-[45%] inline-flex">
            <div className="block w-100">
              <img src="/images/employer.png" alt="employer top"></img>
            </div>
          </div>
        </div>
      </section>
      <HomeSectionWork></HomeSectionWork>
      <section className="py-[156px] container bg-white relative">
        <div className="flex items-center flex-col mb-[20px]">
          <h1 className="block text-center font-bold text-[64px] text-black mb-[20px]">
            FAQ
          </h1>
          <p className="block text-center font-normal text-[16px] text-dark-grey w-[70%] pl-[40px] pr-[40px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
            sollicitudin eu blandit diam. Ultrices nulla ut ullamcorper euismod
            tortor. Ornare in at phasellus ut suspendisse.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex w-[70%]">
            <div className="w-full bg-white rounded-[16px] border border-light-grey">
              <ul className="flex flex-col px-[12px] w-full">
                <li>
                  <div className="border-b border-light-grey">
                    <button
                      onClick={() => onSetFAQ(1)}
                      className="w-full p-[25px] relative z-10 cursor-pointer font-semibold block text-[14px] text-black flex flex-row justify-between items-center"
                    >
                      <span>How to post a job in Humahire</span>
                      <div className="inline-flex">
                        <ArrowBottom></ArrowBottom>
                      </div>
                    </button>
                    <div
                      className={`${
                        faqNumber === 1
                          ? 'h-auto opacity-100 '
                          : 'opacity-0 h-0 '
                      } transition-all duration-300  ease-in-out`}
                    >
                      <p className="text-[14px] px-[25px] pb-[15px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias expedita dolor iure cum rem nobis
                        reprehenderit blanditiis omnis odit fugit, modi
                        repudiandae consequatur soluta. Iste perspiciatis harum
                        quasi unde tempore.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className=" border-b border-light-grey">
                    <button
                      onClick={() => onSetFAQ(2)}
                      className="w-full p-[25px] relative z-10 cursor-pointer font-semibold block text-[14px] text-black flex flex-row justify-between items-center"
                    >
                      <span>How to get candidates from the job created</span>
                      <div className="inline-flex">
                        <ArrowBottom></ArrowBottom>
                      </div>
                    </button>
                    <div
                      className={`${
                        faqNumber === 2
                          ? 'h-auto opacity-100 '
                          : 'opacity-0 h-0 '
                      } transition-all duration-300  ease-in-out`}
                    >
                      <p className="text-[14px] px-[25px] pb-[15px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias expedita dolor iure cum rem nobis
                        reprehenderit blanditiis omnis odit fugit, modi
                        repudiandae consequatur soluta. Iste perspiciatis harum
                        quasi unde tempore.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className=" border-b border-light-grey">
                    <button
                      type="button"
                      onClick={() => onSetFAQ(3)}
                      className="w-full p-[25px] relative z-10 cursor-pointer font-semibold block text-[14px] text-black flex flex-row justify-between items-center"
                    >
                      <span>
                        How to unlock candidates that have been referred by
                        Recruiter
                      </span>
                      <span className="inline-flex">
                        <ArrowBottom></ArrowBottom>
                      </span>
                    </button>
                    <div
                      className={`${
                        faqNumber === 3
                          ? 'h-auto opacity-100 '
                          : 'opacity-0 h-0 '
                      } transition-all duration-300  ease-in-out`}
                    >
                      <p className="text-[14px] px-[25px] pb-[15px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias expedita dolor iure cum rem nobis
                        reprehenderit blanditiis omnis odit fugit, modi
                        repudiandae consequatur soluta. Iste perspiciatis harum
                        quasi unde tempore.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border-b border-light-grey">
                    <button
                      onClick={() => onSetFAQ(4)}
                      className="w-full p-[25px] relative z-10 cursor-pointer font-semibold block text-[14px] text-black flex flex-row justify-between items-center"
                    >
                      <span>What should we do after unlock candidates</span>
                      <div className="inline-flex">
                        <ArrowBottom></ArrowBottom>
                      </div>
                    </button>
                    <div
                      className={`${
                        faqNumber === 4
                          ? 'h-auto opacity-100 '
                          : 'opacity-0 h-0 '
                      } transition-all duration-300  ease-in-out`}
                    >
                      <p className="text-[14px] px-[25px] pb-[15px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias expedita dolor iure cum rem nobis
                        reprehenderit blanditiis omnis odit fugit, modi
                        repudiandae consequatur soluta. Iste perspiciatis harum
                        quasi unde tempore.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border-0 border-light-grey">
                    <button
                      onClick={() => onSetFAQ(5)}
                      className="w-full p-[25px] relative z-10 cursor-pointer font-semibold block text-[14px] text-black flex flex-row justify-between items-center"
                    >
                      <span> How to hire the shortlisted candidates</span>
                      <div className="inline-flex">
                        <ArrowBottom></ArrowBottom>
                      </div>
                    </button>
                    <div
                      className={`${
                        faqNumber === 5
                          ? 'h-auto opacity-100 '
                          : 'opacity-0 h-0 '
                      } transition-all duration-300  ease-in-out`}
                    >
                      <p className="text-[14px] px-[25px] pb-[15px]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestias expedita dolor iure cum rem nobis
                        reprehenderit blanditiis omnis odit fugit, modi
                        repudiandae consequatur soluta. Iste perspiciatis harum
                        quasi unde tempore.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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

              <Link
                href={{
                  pathname: '/',
                  query: { page: 'register' },
                }}
                className="inline-flex items-center justify-center text-primary font-bold text-[14px] bg-white rounded-[8px] w-[290px] h-[64px] relative"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <OvalYellow></OvalYellow>
        </div>
      </section>
    </Layout>
  );
}
