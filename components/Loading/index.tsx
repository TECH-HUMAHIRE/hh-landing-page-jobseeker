import { Spinner } from 'flowbite-react';
import type { ILoading } from './Loading.type';

const Loading = (props: ILoading): any => {
  return props?.status ? (
    <div className="z-[1020] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-primary/[.06]">
      <div className="fill-primary">
        <Spinner
          aria-label="Default status example"
          size="xl"
          color="success"
        />
      </div>
    </div>
  ) : (
    false
  );
};

export default Loading;
