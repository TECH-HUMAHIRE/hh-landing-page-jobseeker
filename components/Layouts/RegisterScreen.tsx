import { ReactNode } from 'react';
import { Button, Checkbox, Label, TextInput, Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type IHeader = {
  children?: ReactNode;
};

const RegisterScreen: React.FC<IHeader> = () => {
  const router = useRouter();
  const onClose = () => {
    router.push('/');
  };
  return (
    <Modal
      show={router?.query?.page === 'register'}
      size="xl"
      popup={true}
      onClose={onClose}
    >
      <Modal.Header>Register as an Employer</Modal.Header>
      <Modal.Body>
        <div className="w-full">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" type="password" required={true} />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 pt-[20px] pb-[20px]">
              <Checkbox id="remember" />
              <label
                className="text-normal text-[10px] text-dark-grey"
                htmlFor="remember"
              >
                By signing up, I agree to HumaHire’s Terms of Service and
                Privacy Policy.
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <Button color="primary">Submit</Button>
          </div>
          <div className="w-full text-center block pt-[20px]">
            <span className="text-grey font-normal text-[14px] pr-[5px]">
              Already have an account?
            </span>

            <Link
              href={{
                pathname: '/',
                query: { page: 'sign-in' },
              }}
              className="text-primary text-[16px] font-bold"
            >
              Sign In
            </Link>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterScreen;
