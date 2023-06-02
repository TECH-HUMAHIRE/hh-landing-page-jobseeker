import { ReactNode, useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Modal,
  Spinner,
} from 'flowbite-react';
import Loading from '../Loading';
import SnackBar from '../SnackBar';
import type { ISnackBarObj } from '../SnackBar';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '../../lib/firebase/firebase';
import { signInWithCustomToken } from 'firebase/auth';

type IHeader = {
  children?: ReactNode;
};

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirm: boolean;
};

type RegisterBody = {
  name: string;
  email: string;
  password: string;
  uid: string;
  user_type: string;
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
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      confirm: false,
    },
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const [snackBarData, setSnackBar] = useState<ISnackBarObj>({
    active: false,
    status: '',
    message: '',
  });
  const router = useRouter();
  const onClose = () => {
    router.push('/');
  };

  const onResetSnackBar = (values: ISnackBarObj): void => setSnackBar(values);

  const onPostData: any = async (response: RegisterBody) => {
    return axios({
      method: 'post',
      url: '/auth/register',
      data: response,
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
                    message: 'SUCCESS REGISTER GO TO DASHBOARD',
                    active: true,
                  });
                  router.push('/?page=sign-in');
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
          message: 'ERROR WHEN REGISTER TO DASHBOARD',
          active: true,
        });
      });
  };
  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const { password, email, name, confirm } = data;
    if (confirm) {
      await onPostData({
        name: name,
        email: email,
        password: password,
        user_type: 'JOBSEEKER',
      });

      // await createUserWithEmailAndPassword(auth, email, password)
      //   .then((res: any) => {
      //     const user: any = res.user.auth.currentUser;
      //     updateProfile(user, {
      //       displayName: name,
      //     }).then(async () => {

      //     });
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
    }
  };
  return (
    <>
      <Loading status={isLoading}></Loading>
      <SnackBar {...snackBarData} onReset={onResetSnackBar}></SnackBar>
      <Modal
        show={router?.query?.page === 'register'}
        size="xl"
        popup={true}
        onClose={onClose}
      >
        <Modal.Header>Register as an Jobseeker</Modal.Header>
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
              <Controller
                name="confirm"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <>
                      <div className="flex items-center gap-2 pt-[20px] ">
                        <Checkbox
                          onChange={field.onChange}
                          name={field.name}
                          id="confirm"
                        />
                        <label
                          className="text-normal text-[10px] text-dark-grey"
                          htmlFor="remember"
                        >
                          By signing up, I agree to HumaHire’s Terms of Service
                          and Privacy Policy.
                        </label>
                      </div>
                    </>
                  );
                }}
              />
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
    </>
  );
};

export default RegisterScreen;
