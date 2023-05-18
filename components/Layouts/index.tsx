import Head from 'next/head';
import Header from './Header';
import { ReactNode, useEffect } from 'react';
import Twitter from '@public/icons/icon-twitter.svg';
import Linkedin from '@public/icons/icon-linkedin.svg';
import Facebook from '@public/icons/icon-fb.svg';
import HumaHireFooter from '@public/icons/huma-hire-logo-footer.svg';

type ILayout = {
  children: ReactNode;
};

const Layout: React.FC<ILayout> = ({ children }: ILayout) => {
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      // document.documentElement.classList.add('light');
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, []);
  return (
    <div className="block w-100">
      <Head>
        <title>Huma Hire For Jobseeker</title>
        <meta
          name="description"
          content="Hire More Effectively Through Crowdsourcing"
        />
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#20C1AA" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#20C1AA"></meta>
      </Head>
      <Header></Header>
      <main className="block w-100 pt-[100px]">{children}</main>
      <footer className="bg-light-white">
        <div className="container pt-[56px] pb-[82px]">
          <div className="flex">
            <div className="inline-flex mr-[260px] flex-col">
              <HumaHireFooter></HumaHireFooter>
              <p className="text-dark-grey text-[16px] text-normal w-[290px] mt-[30px]">
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
              <li className="ml-7">
                <a href="/">
                  <Twitter></Twitter>
                </a>
              </li>
              <li className="ml-7">
                <a href="/">
                  <Facebook></Facebook>
                </a>
              </li>

              <li className="ml-7">
                <a href="/">
                  <Linkedin></Linkedin>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
