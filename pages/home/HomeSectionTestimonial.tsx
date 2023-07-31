/* eslint-disable @next/next/no-img-element */

import { useLayoutEffect, useRef, useState } from 'react';
import { Carousel } from 'flowbite-react';
import ChevronRight from '@public/icons/chevron-right.svg';
import ShapeOne from '@public/icons/vectors/shape-slider-1.svg';
import ShapeTwo from '@public/icons/vectors/shape-slider-2.svg';
import Ellipsis from '@public/icons/vectors/ellipse-slider.svg';
import Quotation from '@public/icons/vectors/quotation-slider.svg';
import AvatarOne from '@public/icons/vectors/avatar-one.svg';
import AvatarTwo from '@public/icons/vectors/avatar-two.svg';
import AvatarThree from '@public/icons/vectors/avatar-three.svg';
import AvatarFour from '@public/icons/vectors/avatar-four.svg';
import AvatarFive from '@public/icons/vectors/avatar-five.svg';
import ShapeDot from '@public/icons/vectors/shape-dot.svg';
import Julo from '@public/icons/logo/julo.svg';
import Dana from '@public/icons/logo/dana.svg';
import Tokopedia from '@public/icons/logo/tokopedia.svg';
import Xendit from '@public/icons/logo/xendit.svg';

const CardSlider = () => {
  return (
    <div className="w-[45%] m-[20px] bg-white drop-shadow-xl inline-flex rounded-[24px] p-[32px]">
      <div className="flex flex-col">
        <p className="text-[20px] font-normal leading-[40px]">
          Humahire help me land this job in no time! It also helped me matched
          my work goals to an exciting job opportunity that I’ve been dreaming
          of.
        </p>
        <div className="flex flex-row pt-[50px]">
          <div className="w-[48px] h-[48px]  bg-white rounded-[50%] mr-[20px]">
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              className="rounded-[50%] block h-full w-full"
            />
          </div>
          <div className="inline-flex flex-1 flex-col">
            <span className="block w-full  text-dark-grey font-medium">
              Rachel Green
            </span>
            <span className="block w-full font-normal text-font-grey">
              Recruiter at Bloomingdales
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomeSectionWork() {
  const refElement = useRef<any>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(refElement?.current.offsetWidth);
  }, []);
  return (
    <section id="testimony" className="pt-[95px] pb-[95px] px-[80px] relative">
      <div className="absolute left-0">
        <Ellipsis></Ellipsis>
      </div>
      <div className="absolute left-[15px] bottom-[300px] animate-bounce">
        <AvatarFive></AvatarFive>
      </div>
      <div className="flex justify-between flex-col">
        <div className="w-full block">
          <div className="block relative" ref={refElement}>
            <h2 className="text-center flex justify-center font-bold text-black text-[40px] w-full relative">
              Our Recruiter and What They Say
              <div className="absolute right-[120px] top-[-70px]">
                <Quotation />
              </div>
              <div className="absolute left-[100px] top-[0] animate-bounce">
                <AvatarOne />
              </div>
              <div className="absolute right-[120px] bottom-[-60px] animate-bounce">
                <AvatarTwo />
              </div>
              <div className="absolute right-[0px] bottom-[-120px]">
                <ShapeDot />
              </div>
            </h2>
          </div>

          <div className="w-full flex justify-center relative">
            <div className="absolute bottom-[-100px] right-[170px]">
              <ShapeOne></ShapeOne>
            </div>
            <div className="absolute bottom-[-20px] right-[20px]">
              <ShapeTwo></ShapeTwo>
            </div>
            {width > 0 && (
              <div className="h-[500px] w-[65%] relative">
                <div className="absolute left-[0px] bottom-[-70px] animate-bounce">
                  <AvatarFour />
                </div>
                <div className="absolute right-[-140px] bottom-[50px] animate-bounce">
                  <AvatarThree />
                </div>
                <Carousel
                  id="slider-testimonial"
                  className="[&>*:nth-child(even)]:bottom-0 [&>*:nth-child(even)]:right-[80px] [&>*:nth-child(odd)]:right-[20px]"
                  slide={false}
                  leftControl={
                    <span className="absolute bottom-0 right-0 p-[8px] bg-white shadow-lg rounded-full h-[40px] w-[40px] flex justify-center items-center ">
                      <ChevronRight className="rotate-180" />
                    </span>
                  }
                  rightControl={
                    <span className="absolute bottom-0 right-0 p-[8px] bg-white shadow-lg rounded-full h-[40px] w-[40px] flex justify-center items-center">
                      <ChevronRight />
                    </span>
                  }
                  indicators={false}
                >
                  <div className="w-full flex justify-center ">
                    <div className="flex flex-row justify-center w-[100%]">
                      <CardSlider></CardSlider>
                      <CardSlider></CardSlider>
                    </div>
                  </div>
                  <div className="w-full flex justify-center ">
                    <div className="flex flex-row justify-center w-[100%]">
                      <CardSlider></CardSlider>
                      <CardSlider></CardSlider>
                    </div>
                  </div>
                  <div className="w-full flex justify-center ">
                    <div className="flex flex-row justify-center w-[100%]">
                      <CardSlider></CardSlider>
                      <CardSlider></CardSlider>
                    </div>
                  </div>
                  <div className="w-full flex justify-center ">
                    <div className="flex flex-row justify-center w-[100%]">
                      <CardSlider></CardSlider>
                      <CardSlider></CardSlider>
                    </div>
                  </div>
                  <div className="w-full flex justify-center ">
                    <div className="flex flex-row justify-center w-[100%]">
                      <CardSlider></CardSlider>
                      <CardSlider></CardSlider>
                    </div>
                  </div>
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[150px] items-center justify-center">
        <span className="inline-flex p-[40px] h-[80px] items-center">
          <Julo />
        </span>
        <span className="inline-flex p-[40px] h-[80px] items-center">
          <Dana />
        </span>
        <span className="inline-flex p-[40px] h-[80px] items-center">
          <Tokopedia />
        </span>
        <span className="inline-flex p-[40px] h-[80px] items-center">
          <Xendit />
        </span>
      </div>
    </section>
  );
}
