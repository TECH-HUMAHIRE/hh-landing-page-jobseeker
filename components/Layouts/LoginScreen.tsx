import { ReactNode, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { Button, Label, TextInput, Modal, Spinner } from 'flowbite-react';
import Loading from '../Loading';
import SnackBar from '../SnackBar';
import type { ISnackBarObj } from '../SnackBar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { auth, signInWithEmailAndPassword } from '../../lib/firebase/firebase';
import { signInWithCustomToken } from 'firebase/auth';

type IHeader = {
  children?: ReactNode;
  showModalForgotPassword: any;
};

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required!'),
    password: yup
      .string()
      .min(6, 'Minimum of 6 characters')
      .required('Password is required!'),
  })
  .required();

const LoginScreen: React.FC<IHeader> = (props) => {
  const { showModalForgotPassword } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const [snackBarData, setSnackBar] = useState<ISnackBarObj>({
    active: false,
    status: '',
    message: '',
  });
  const onClose = () => {
    router.push('/');
  };
  const handleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };
  const onPostData: any = async (email: string, password: string) => {
    return axios({
      method: 'post',
      url: '/auth/login',
      data: {
        email: email,
        password: password,
      },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    })
      .then(({ data, status }) => {
        if (status === 200) {
          if (data?.data?.token) {
            signInWithCustomToken(auth, data?.data?.token).then(
              (userCredential) => {
                userCredential.user.getIdToken().then((response) => {
                  setSnackBar({
                    status: 'SUCCESS',
                    message: 'SUCCESS LOGIN GO TO DASHBOARD',
                    active: true,
                  });
                  localStorage.setItem('token', response);
                  window.location.href = `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/redirect?tlfb=${data?.data?.token}&token=${response}&isVerify${data?.data?.email_verified}&uid=${data?.data?.email_verified}&refresh_token=${userCredential.user.refreshToken}`;
                  // window.location.href = `http://localhost:5173/redirect?token=${response}&isVerify${data?.data?.email_verified}&uid=${data?.data?.email_verified}`;
                });
              },
            );
          }
        }
      })
      .catch(() => {
        setSnackBar({
          status: 'ERROR',
          message: 'ERROR WHEN LOGIN TO DASHBOARD',
          active: true,
        });
      });
  };

  const onResetSnackBar = (values: ISnackBarObj): void => setSnackBar(values);

  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    const { password, email } = data;
    setLoading(true);
    await onPostData(email, password);
    // await signInWithEmailAndPassword(auth, email, password)
    //   .then(async () => {
    //     await onPostData(email, password);
    //   })
    //   .catch((error) => {
    //     let messageError = '';
    //     switch (error.code) {
    //       case 'auth/wrong-password':
    //         messageError = `Password you entered doesn't match our records. Please double-check and try again`;
    //         break;
    //       case 'auth/user-not-found':
    //         messageError = `The email you entered doesn't match our records. Please double-check and try again`;
    //         break;
    //       default:
    //         messageError =
    //           'Oops! Something went wrong, please try again later.';
    //     }
    //     setSnackBar({
    //       status: 'ERROR',
    //       message: messageError.toUpperCase(),
    //       active: true,
    //     });
    //   });
    setLoading(false);
  };
  return (
    <>
      <Loading status={isLoading}></Loading>
      <SnackBar {...snackBarData} onReset={onResetSnackBar}></SnackBar>
      <Modal
        show={router?.query?.page === 'sign-in'}
        size="xl"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header>Login as an Jobseeker</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmitForm)} className="w-full">
            <div className="block mb-[24px]">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                {...register('email')}
                id="email"
                placeholder="Email"
                helperText={
                  errors?.email?.message && (
                    <span className="text-[10px] text-error-message">
                      {errors?.email?.message}
                    </span>
                  )
                }
              />
            </div>
            <div className="block mb-[24px]">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <div className="relative">
                <TextInput
                  {...register('password')}
                  id="password"
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  helperText={
                    errors?.password?.message && (
                      <span className="text-[10px] text-error-message">
                        {errors?.password?.message}
                      </span>
                    )
                  }
                />
                <img
                  onClick={handleShowPassword}
                  src="/icons/eye.svg"
                  alt="eye"
                  className="absolute cursor-pointer right-0 top-0 p-3"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center justify-end w-full  pb-[40px]">
                <div
                  className="text-primary text-[16px] font-bold cursor-pointer"
                  onClick={showModalForgotPassword}
                >
                  Forgot password?
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <Button type="submit" color="primary">
                {isLoading ? (
                  <>
                    <div className="fill-primary mr-3">
                      <Spinner size="sm" color="success" />
                    </div>
                    Loading ...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
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
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginScreen;
