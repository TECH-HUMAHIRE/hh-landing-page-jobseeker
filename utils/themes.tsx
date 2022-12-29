import { CustomFlowbiteTheme } from 'flowbite-react/lib/esm/components/Flowbite/FlowbiteTheme';

export const flowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: 'bg-primary text-white',
    },
  },
  spinner: {
    color: {
      success: 'fill-[#20C1AA]',
    },
  },
  modal: {
    header: {
      base: 'flex flex-row justify-between w-full p-5',
      popup: '',
      title: 'font-bold text-[24px] text-black',
      close: {
        base: ' right-0',
      },
    },
    body: {
      base: 'flex flex-row justify-between w-full p-5',
      popup: '',
    },
  },
  label: {
    base: 'font-bold text-[14px] text-dark-grey',
    colors: {
      default: 'text-dark-grey',
    },
  },
};
