import { useForm as RHFuseForm, UseFormProps } from 'react-hook-form';

export const useForm = <T>(options?: UseFormProps<T>) => {
  const form = RHFuseForm<T>(options);

  return form;
};
