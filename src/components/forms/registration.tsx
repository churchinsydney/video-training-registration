import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <section className='h-screen items-center bg-gray-50 dark:bg-gray-900'>
      Registration
      <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email1' value='Your email' />
          </div>
          <TextInput
            id='email1'
            type='email'
            // placeholder='name@flowbite.com'
            required={true}
            {...register('email')}
          />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='Mobile' value='Your mobile' />
          </div>
          <TextInput
            id='mobile'
            type='text'
            {...register('mobile')}
            required={true}
          />
        </div>
        {errors.mobile && <p>is required</p>}
        <Button type='submit'>Submit</Button>
      </form>
    </section>
  );
}
