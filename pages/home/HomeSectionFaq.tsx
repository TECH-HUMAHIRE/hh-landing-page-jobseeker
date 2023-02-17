import { useState } from 'react';
import ShapeFaq from '@public/icons/vectors/shape-faq.svg';
import ArrowBottom from '@public/icons/arrow-bottom.svg';

export default function HomeSectionFaq() {
  const [faqNumber, setFaqNumber] = useState<number>(0);
  const onSetFAQ = (currentNumber: number): void => {
    setFaqNumber(currentNumber === faqNumber ? 0 : currentNumber);
  };

  return (
    <section className="py-[156px] container bg-white relative">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <ShapeFaq></ShapeFaq>
      </div>
      <div className="flex items-center flex-col mb-[20px] relative z-10">
        <h1 className="block text-center font-bold text-[64px] text-black mb-[20px]">
          FAQ
        </h1>
        <p className="block text-center font-normal text-[16px] text-dark-grey w-[70%] pl-[40px] pr-[40px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
          sollicitudin eu blandit diam. Ultrices nulla ut ullamcorper euismod
          tortor. Ornare in at phasellus ut suspendisse.
        </p>
      </div>
      <div className="flex items-center flex-col relative">
        <div className="flex w-[70%] relative">
          <div className="w-full bg-white rounded-[16px] border border-light-grey">
            <ul className="flex flex-col px-[12px] w-full">
              <li>
                <div className="border-b border-light-grey">
                  <button
                    onClick={() => onSetFAQ(1)}
                    className="w-full p-[25px] relative z-10 cursor-pointer font-semibold text-[14px] text-black flex flex-row justify-between items-center"
                  >
                    <span>How to post a job in Humahire</span>
                    <div className="inline-flex">
                      <ArrowBottom></ArrowBottom>
                    </div>
                  </button>
                  <div
                    className={`${
                      faqNumber === 1 ? 'h-auto opacity-100 ' : 'opacity-0 h-0 '
                    } transition-all duration-300  ease-in-out`}
                  >
                    <p className="text-[14px] px-[25px] pb-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias expedita dolor iure cum rem nobis reprehenderit
                      blanditiis omnis odit fugit, modi repudiandae consequatur
                      soluta. Iste perspiciatis harum quasi unde tempore.
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
                      faqNumber === 2 ? 'h-auto opacity-100 ' : 'opacity-0 h-0 '
                    } transition-all duration-300  ease-in-out`}
                  >
                    <p className="text-[14px] px-[25px] pb-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias expedita dolor iure cum rem nobis reprehenderit
                      blanditiis omnis odit fugit, modi repudiandae consequatur
                      soluta. Iste perspiciatis harum quasi unde tempore.
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
                      faqNumber === 3 ? 'h-auto opacity-100 ' : 'opacity-0 h-0 '
                    } transition-all duration-300  ease-in-out`}
                  >
                    <p className="text-[14px] px-[25px] pb-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias expedita dolor iure cum rem nobis reprehenderit
                      blanditiis omnis odit fugit, modi repudiandae consequatur
                      soluta. Iste perspiciatis harum quasi unde tempore.
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
                      faqNumber === 4 ? 'h-auto opacity-100 ' : 'opacity-0 h-0 '
                    } transition-all duration-300  ease-in-out`}
                  >
                    <p className="text-[14px] px-[25px] pb-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias expedita dolor iure cum rem nobis reprehenderit
                      blanditiis omnis odit fugit, modi repudiandae consequatur
                      soluta. Iste perspiciatis harum quasi unde tempore.
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
                      faqNumber === 5 ? 'h-auto opacity-100 ' : 'opacity-0 h-0 '
                    } transition-all duration-300  ease-in-out`}
                  >
                    <p className="text-[14px] px-[25px] pb-[15px]">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Molestias expedita dolor iure cum rem nobis reprehenderit
                      blanditiis omnis odit fugit, modi repudiandae consequatur
                      soluta. Iste perspiciatis harum quasi unde tempore.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
