import Layout from '@components/Layouts';
import Image from 'next/image';
import HomeSectionWork from './home/HomeSectionWork';
import OvalRed from '@public/icons/oval-red.svg';
import OvalYellow from '@public/icons/oval-yellow.svg';

export default function Home() {
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
              <button className="mr-[20px] bg-white border border-primary font-bold text-[14px] text-primary rounded-[8px] w-[180px] h-[40px]">
                Sign In
              </button>
              <button className=" text-white font-bold text-[14px] bg-primary rounded-[8px] w-[180px] h-[40px]">
                Register Now
              </button>
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
      <section className="h-screen container bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis
        aspernatur unde eum, praesentium iusto sapiente accusantium optio quae
        dolor ipsum delectus voluptates temporibus. Officiis, officia. Est
        exercitationem provident minus!
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
              <button className="text-primary font-bold text-[14px] bg-white rounded-[8px] w-[290px] h-[64px] relative">
                Register Now
              </button>
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
