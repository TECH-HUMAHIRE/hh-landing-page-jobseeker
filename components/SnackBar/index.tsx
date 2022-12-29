import { useEffect, useState } from 'react';
import {
  ISnackBar,
  snackBarType,
  defaultSnackBar,
  ISnackBarObj,
} from './SnackBar.types';

const SnackBar = (props: ISnackBar): any => {
  const { active, status, message, onReset } = props;
  const [isActive, setActive] = useState<boolean>(false);
  const onGetChangeSnackBar = (status: boolean): void => {
    if (status) {
      setActive(status);
      setTimeout(() => {
        onReset && onReset(defaultSnackBar);
      }, 3000);
    }
  };
  useEffect(() => {
    onGetChangeSnackBar(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  console.log(snackBarType[status]?.bg, 'snackBarType');
  console.log(status, 'snackBarType');
  return (
    <div
      className={`${
        active ? 'top-0' : 'top-[-200px]'
      } duration-700 transition-all ease-in-out fixed top-0 left-0 right-0 z-[1100] px-[20px] py-[20px] flex justify-center ${
        snackBarType[status]?.bg
      }`}
    >
      <p className="block text-center text-white font-300">{message}</p>
    </div>
  );
};

export { snackBarType };
export type { ISnackBar, ISnackBarObj };

export default SnackBar;
