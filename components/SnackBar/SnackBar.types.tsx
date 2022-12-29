export type ISnackBarObj = {
  status: string;
  message: string;
  active: boolean;
};

export type ISetSnackBar = {
  onReset: (value: ISnackBarObj) => any;
};

export type ISnackBar = ISnackBarObj & ISetSnackBar;

export const defaultSnackBar: ISnackBarObj = {
  active: false,
  status: '',
  message: '',
};

export const snackBarType: any = {
  ERROR: {
    bg: 'bg-[#F44336]',
    color: 'text-white',
  },
  SUCCESS: {
    bg: 'bg-primary',
    color: 'text-white',
  },
};
