import { ReactNode } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Checkbox, Label, TextInput, Modal } from 'flowbite-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../../lib/firebase/firebase';

type IHeader = {
  children?: ReactNode;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm: boolean;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required!'),
    name: yup
      .string()
      .min(3, 'Minimum of 3 characters')
      .required('Name is required!'),
    confirm: yup.boolean().oneOf([true], 'to continue please check this field'),
    password: yup
      .string()
      .min(6, 'Minimum of 6 characters')
      .required('Password is required!'),
  })
  .required();

const RegisterScreen: React.FC<IHeader> = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      confirm: false,
    },
  });
  const router = useRouter();
  const onClose = () => {
    router.push('/');
  };

  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    console.log(data, 'masuk sini');
    const { password, email, name, confirm } = data;
    if (confirm) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res: any) => {
          const user: any = res.user.auth.currentUser;
          updateProfile(user, {
            displayName: name,
          }).then(() => {});
        })
        .catch((error) => {
          let messageError = '';
          switch (error.code) {
            case 'auth/wrong-password':
              messageError = `Password you entered doesn't match our records. Please double-check and try again`;
              break;
            case 'auth/user-not-found':
              messageError = `The email you entered doesn't match our records. Please double-check and try again`;
              break;
            default:
              messageError =
                'Oops! Something went wrong, please try again later.';
          }
          console.log(messageError);
        });
    }
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
        <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="block mb-2">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              {...register('email')}
              helperText={
                errors?.email?.message && (
                  <span className="text-[10px] text-error-message">
                    {errors?.email?.message}
                  </span>
                )
              }
            />
          </div>
          <div className="block mb-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              placeholder="John XXX XXX"
              helperText={
                errors?.name?.message && (
                  <span className="text-[10px] text-error-message">
                    {errors?.name?.message}
                  </span>
                )
              }
              {...register('name', { required: true })}
            />
          </div>
          <div className="block mb-2">
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="password"
              {...register('password')}
              helperText={
                errors?.password?.message && (
                  <span className="text-[10px] text-error-message">
                    {errors?.password?.message}
                  </span>
                )
              }
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 pt-[20px] ">
              <Controller
                name="confirm"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox id="confirm" {...field} />}
              />
              <label
                className="text-normal text-[10px] text-dark-grey"
                htmlFor="remember"
              >
                By signing up, I agree to HumaHire’s Terms of Service and
                Privacy Policy.
              </label>
            </div>
          </div>
          <div className="block pb-[20px]">
            {errors?.confirm?.message && (
              <span className="text-[10px] text-error-message">
                {errors?.confirm?.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <Button type="submit" color="primary">
              Submit
            </Button>
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
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterScreen;
