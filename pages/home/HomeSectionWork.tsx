/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import DotOrange from '@public/icons/dot-orange.svg';

export default function HomeSectionWork() {
  const [activeNumber, setActiveNumber] = useState<number>(1);

  const onActiveState = (activeNumber: number): void => {
    setActiveNumber(activeNumber);
  };
  return (
    <section
      id="how-it-work"
      className="pt-[95px] pb-[95px] pl-[80px] bg-light-orange"
    >
      <div className="flex justify-between">
        <div className="w-[35%] inline-flex">
          <div className="block relative">
            <div className="absolute bottom-[-30px]">
              <DotOrange></DotOrange>
            </div>
            <h2 className="font-bold text-black text-[40px]">How It Work ?</h2>
            <p className="text-[20px] font-normal text-dark-grey mb-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quis
              sollicitudin eu blanam.{' '}
            </p>
            <ul>
              <li className="mb-[28px]">
                <div
                  onClick={() => onActiveState(1)}
                  className="flex cursor-pointer mb-[10px]"
                >
                  <span className="w-8 h-8 rounded-full items-center justify-center font-bold text-[16px] text-white bg-secondary inline-flex">
                    1
                  </span>
                  <p className="ml-2 text-black font-bold text-[20px] flex items-center">
                    Step One
                  </p>
                </div>
                <p
                  className={`ml-10 text-[20px] font-normal text-dark-grey ${
                    activeNumber === 1 ? '' : 'hidden'
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  quis sollicitudin eu blandit diam. Ultrices nulla ut
                  ullamcorper euismod tortor. Ornare in at phasellus ut
                  suspendisse.
                </p>
              </li>
              <li className="mb-[28px]">
                <div
                  onClick={() => onActiveState(2)}
                  className="flex cursor-pointer mb-[10px]"
                >
                  <span className="w-8 h-8 rounded-full items-center justify-center font-bold text-[16px] text-white bg-secondary inline-flex">
                    2
                  </span>
                  <p className="ml-2 text-black font-bold text-[20px] flex items-center">
                    Step Two
                  </p>
                </div>
                <p
                  className={`ml-10 text-[20px] font-normal text-dark-grey ${
                    activeNumber === 2 ? '' : 'hidden'
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  quis sollicitudin eu blandit diam. Ultrices nulla ut
                  ullamcorper euismod tortor. Ornare in at phasellus ut
                  suspendisse.
                </p>
              </li>
              <li className="mb-[28px]">
                <div
                  onClick={() => onActiveState(3)}
                  className="flex cursor-pointer mb-[10px]"
                >
                  <span className="w-8 h-8 rounded-full items-center justify-center font-bold text-[16px] text-white bg-secondary inline-flex">
                    3
                  </span>
                  <p className="ml-2 text-black font-bold text-[20px] flex items-center">
                    Step Three
                  </p>
                </div>
                <p
                  className={`ml-10 text-[20px] font-normal text-dark-grey ${
                    activeNumber === 3 ? '' : 'hidden'
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  quis sollicitudin eu blandit diam. Ultrices nulla ut
                  ullamcorper euismod tortor. Ornare in at phasellus ut
                  suspendisse.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[55%] inline-flex">
          <div className="block w-full relative">
            <div className="absolute left-[-20px] top-[-20px]">
              <span className="w-[60px] h-[60px] rounded-full bg-secondary inline-flex"></span>
            </div>
            <img
              className="block w-full relative z-10"
              src="/images/how-it-work.png"
              alt="how it work section"
            ></img>
            <div className="absolute left-[-90px] bottom-[-20px]">
              <span className="w-[200px] h-[200px] rounded-full bg-secondary-light inline-flex"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
