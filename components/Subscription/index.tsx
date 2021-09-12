import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postUser } from '../../constants/firebase/users';

interface IFormData {
  email: string;
}

const Subscription = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: IFormData) => {
    postUser(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Email" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default Subscription;
