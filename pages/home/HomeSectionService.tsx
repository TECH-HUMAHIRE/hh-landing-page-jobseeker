/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import DotService from '@public/icons/dot-service.svg';
import DotServiceThree from '@public/icons/dot-service-three.svg';
import EllipsisOval from '@public/icons/vectors/ellipse-oval.svg';
import Ellipsis from '@public/icons/vectors/ellipse-slider.svg';

export default function HomeSectionService() {
  const [activeNumber, setActiveNumber] = useState<number>(1);

  const onActiveState = (e: any): void => {
    setActiveNumber(Number(e.target.value));
  };
  return (
    <section className="pt-[95px] container relative">
      <div className="absolute bottom-0 right-0">
        <EllipsisOval></EllipsisOval>
      </div>
      <div className="absolute bottom-[-50px] left-0">
        <Ellipsis></Ellipsis>
      </div>
      <div className="flex justify-center items-center mb-[80px] relative">
        <div className="absolute left-[100px] top-[0]">
          <DotService></DotService>
        </div>
        <div className="absolute right-[100px] top-[50px]">
          <DotServiceThree></DotServiceThree>
        </div>
        <h2 className="font-bold text-black text-[40px] relative">
          What services do we provide?
        </h2>
      </div>
      <div className="flex justify-center items-center mb-[80px] h-[90px] ">
        <button
          type="button"
          key={1}
          value={1}
          onClick={onActiveState}
          className={`${
            activeNumber === 1
              ? 'text-white  bg-primary font-bold '
              : ' text-black  bg-light-orange text-center font-normal '
          } m-[12px] inline-flex text-center items-center justify-center  text-[16px] rounded-[24px] w-[138px] h-[48px] ease-in-out transition-all duration-300`}
        >
          Job Seeker
        </button>
        <button
          key={2}
          value={2}
          type="button"
          onClick={onActiveState}
          className={`${
            activeNumber === 2
              ? 'text-white  bg-primary font-bold '
              : ' text-black bg-light-orange text-center font-normal '
          } m-[12px] inline-flex text-center items-center justify-center  text-[16px] rounded-[24px] w-[138px] h-[48px] ease-in-out transition-all duration-300`}
        >
          Recruiter
        </button>
      </div>
      <div className="flex justify-between relative">
        <div className="w-[50%] inline-flex">
          <div className="block relative">
            <img
              src="/images/service.png"
              className="block h-full w-full"
              alt="service first"
            ></img>
          </div>
        </div>
        <div className="w-[40%] inline-flex">
          <div className="block w-full relative mt-[90px]">
            <h4 className="font-bold text-[30px] block text-grey">
            Get Chance to be Offered a Job
            </h4>
            <p className="font-normal text-[20px] text-dark-grey mt-[10px]">
            Are you an employer of a company? Humahire can help you to get the best talent for your company needs. You can create a job vacancy and the our recruiter will find the best talent for you.
            </p>
            <a
              href="/"
              className="text-secondary font-bold text-[20px] mt-[20px] block w-full"
            >
              Learn More {`>`}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
