import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Label, Modal, Spinner, TextInput } from 'flowbite-react';
import { ReactNode, useState } from 'react';
import * as yup from 'yup';
import SnackBar from '../SnackBar';
import type { ISnackBarObj } from '../SnackBar';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import axios from 'axios';
type IHeader = {
  children?: ReactNode;
  showModalForgotPassword: any;
  isOpen: boolean;
};
type Inputs = {
  email: string;
};
const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email format')
      .required('Email is required!'),
  })
  .required();
const ForgotPasswordScreen: React.FC<IHeader> = ({
  showModalForgotPassword = () => {},
  isOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const [snackBarData, setSnackBar] = useState<ISnackBarObj>({
    active: false,
    status: '',
    message: '',
  });
  const onResetSnackBar = (values: ISnackBarObj): void => setSnackBar(values);
  const onPostData: any = async (email: string) => {
    return axios({
      method: 'get',
      url: `/auth/forgot-password/${email}`,
      params: {
        type_user: 'jobseeker',
      },
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    })
      .then(({ data, status }) => {
        if (status === 200) {
          setSnackBar({
            status: 'SUCCESS',
            message: data.meta.message,
            active: true,
          });
          setTimeout(() => {
            showModalForgotPassword();
          }, 3000);
        }
      })
      .catch((err) => {
        setSnackBar({
          status: 'ERROR',
          message: 'ERROR WHEN SEND LINK EMAIL TO CHANGE PASSWORD',
          active: true,
        });
      });
  };
  const onSubmitForm: SubmitHandler<Inputs> = async (data) => {
    const { email } = data;
    await onPostData(email);
  };
  // const { showModalForgotPassword: any = () => {} } = props;
  return (
    <>
      <SnackBar {...snackBarData} onReset={onResetSnackBar}></SnackBar>
      <Modal show={isOpen} onClose={showModalForgotPassword}>
        <Modal.Header>
          Forgot Password{' '}
          <div className="text-[14px] text-dark-grey font-normal">
            We’ll sent a link to your email.
          </div>
        </Modal.Header>

        <Modal.Body>
          <form className="w-full" onSubmit={handleSubmit(onSubmitForm)}>
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
            <div className="w-full flex flex-col">
              <Button type="submit" color="primary">
                Send
                {/* {isLoading ? (
                  <>
                    <div className="fill-primary mr-3">
                      <Spinner size="sm" color="success" />
                    </div>
                    Loading ...
                  </>
                ) : (
                  
                )} */}
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ForgotPasswordScreen;
