import Head from 'next/head';
import Header from './Header';
import { ReactNode } from 'react';

type ILayout = {
  children: ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  return (
    <div className="block w-100">
      <Head>
        <title>Huma Hire For Recruiter</title>
        <meta
          name="description"
          content="Hire More Effectively Through Crowdsourcing"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="block w-100 pt-[100px]">{children}</main>
      <footer className="bg-light-white">
        <div className="container pt-[56px] pb-[82px]">
          <div className="flex">
            <div className="inline-flex mr-[260px]">
              <p className="text-dark-grey text-[16px] text-normal w-[290px]">
                HumaHire is a marketplace that enables everyone to leverage the
                power of crowdsourcing to recruit.
              </p>
            </div>
            <div className="inline-flex">
              <ul>
                <li className="mb-[20px]">
                  <span className="text-[20px] font-bold text-black">
                    Product
                  </span>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Employers
                  </a>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Recruiter
                  </a>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Jobseeker
                  </a>
                </li>
              </ul>
            </div>
            <div className="inline-flex ml-[40px]">
              <ul>
                <li className="mb-[20px]">
                  <span className="text-[20px] font-bold text-black">
                    Company
                  </span>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    About Us
                  </a>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-[16px]">
                  <a className="font-normal text-[16px] text-grey" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container border-t border-light-grey py-[16px]">
          <div className="flex justify-between">
            <span className="font-normal text-grey text-[16px]">
              Copyright © 2022 HumaHire. All Rights Reserved.
            </span>
            <ul className="inline-flex flex-row">
              <li className="ml-4">
                <a href="/">Twit</a>
              </li>
              <li className="ml-4">
                <a href="/">Face</a>
              </li>
              <li className="ml-4">
                <a href="/">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;