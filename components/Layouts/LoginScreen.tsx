import { ReactNode } from 'react';
import { Button, Label, TextInput, Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type IHeader = {
  children?: ReactNode;
};

const LoginScreen: React.FC<IHeader> = () => {
  const router = useRouter();
  const onClose = () => {
    router.push('/');
  };
  return (
    <Modal
      show={router?.query?.page === 'sign-in'}
      size="xl"
      popup={true}
      onClose={onClose}
    >
      <Modal.Header>Login as an Employer</Modal.Header>
      <Modal.Body>
        <div className="w-full">
          <div className="block mb-[24px]">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div className="block mb-[24px]">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput id="password" type="password" required={true} />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center justify-end w-full  pb-[40px]">
              <Link
                href={{
                  pathname: '/',
                  query: { page: 'register' },
                }}
                className="text-primary inline-flex text-bold text-[16px]"
              >
                Forget password?
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <Button color="primary">Submit</Button>
          </div>
          <div className="w-full text-center block pt-[20px]">
            <span className="text-grey font-normal text-[14px] pr-[5px]">
              Don’t have account yet?
            </span>

            <Link
              href={{
                pathname: '/',
                query: { page: 'register' },
              }}
              className="text-primary text-[16px] font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginScreen;
