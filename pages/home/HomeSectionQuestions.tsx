import Email from '@public/icons/icon-email.svg';
import Call from '@public/icons/icon-call.svg';
import Address from '@public/icons/icon-address.svg';
import { Textarea, TextInput } from 'flowbite-react';
export default function HomeSectionQuestions() {
  return (
    <section className="py-[156px] container bg-white relative">
      <div className="flex items-center flex-col mb-[20px] relative">
        <h1 className="block text-center font-bold text-[40px] text-black mb-[20px]">
          Still have questions? We’d love to help!
        </h1>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex w-[70%] relative ">
          <div className="flex w-full h-[448px] rounded-3xl drop-shadow-xl">
            <div className="w-[55%]  inline-flex bg-white flex-col  rounded-l-3xl p-[40px]">
              <div className="block w-full mb-[40px]">
                <p>Feel free to drop us your question below</p>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full mb-[26px]">
                  <TextInput
                    placeholder="Type your email "
                    id="small"
                    type="text"
                    sizing="md"
                    className="block"
                  />
                </div>
                <div className="flex flex-col w-full mb-[26px]">
                  <TextInput
                    placeholder="Tell us your main concern"
                    id="base"
                    type="text"
                    sizing="md"
                  />
                </div>
                <div className="flex flex-col w-full mb-[26px]">
                  <Textarea
                    placeholder="Write down your concern here..."
                    id="large"
                    rows={4}
                  />
                </div>
                <div className="flex flex-col w-full mb-[26px] items-end justify-end">
                  <button
                    type="button"
                    className="inline-flex text-white text-center items-center justify-center font-bold text-[14px] bg-primary rounded-[8px] w-[160px] h-[40px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[45%] inline-flex bg-primary items-start justify-center flex-col p-[20px] rounded-r-3xl">
              <p className="font-bold text-[24px] text-white flex mb-[40px]">
                Contact us through
              </p>
              <div className="flex flex-row items-center mb-[16px]">
                <span className="inline-flex mr-[16px]">
                  <Address></Address>
                </span>
                <span className="text-[16px] font-normal text-white">
                  One Pacific Place, Jakarta, ID
                </span>
              </div>
              <div className="flex flex-row items-center mb-[16px]">
                <span className="inline-flex mr-[16px]">
                  <Call></Call>
                </span>
                <span className="text-[16px] font-normal text-white">
                  +62 1234 56789
                </span>
              </div>
              <div className="flex flex-row items-center mb-[16px]">
                <span className="inline-flex mr-[16px]">
                  <Email></Email>
                </span>
                <span className="text-[16px] font-normal text-white">
                  humahire@mail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
