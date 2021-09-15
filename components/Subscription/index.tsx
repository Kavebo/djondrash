import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import logo from '../../assets/images/Logo.png';
import { postUser } from '../../constants/firebase/users';
import { useTranslation } from '../../languages';
import { EmailInput, InputWrapper, Label, Label2, LogoImageWrapper, SubscribeButton } from './styled';

const validateEmail = (value: string) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  );

interface IFormData {
  email: string;
}

interface ISubscription {
  closeModal: () => void;
}

const Subscription: React.FC<ISubscription> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = (data: IFormData) => {
    postUser(data.email);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label>{t('subscription_label')}</Label>
      <LogoImageWrapper>
        <Label2>{t('subscription_label2')}</Label2>
        <img src={logo} alt="dj ondrash logo" width={80} height={40} />
      </LogoImageWrapper>
      <InputWrapper>
        <EmailInput {...register('email', { required: true, validate: validateEmail })} placeholder="Email" />
        <SubscribeButton type="submit">{t('subscription_button')}</SubscribeButton>
        <ErrorMessage message={t('subscription_invalid_email')} errors={errors} name="email" />
      </InputWrapper>
    </form>
  );
};

export default Subscription;
