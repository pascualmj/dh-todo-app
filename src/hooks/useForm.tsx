import { useForm as RHFuseForm, UseFormProps } from 'react-hook-form';

export const useForm = (options?: UseFormProps) => {
  const form = RHFuseForm(options);

  return form;
};
