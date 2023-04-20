import React from 'react';
import CustomInput from "@/components/customs/custom-input/customInput";
import {SubmitHandler, useForm} from "react-hook-form";

interface SearchInputs {
  comment: string;
}

export const AddReviewForm = () => {

  const {register, handleSubmit, formState: {errors}, watch} = useForm<SearchInputs>({mode: 'onSubmit'})

  const handleSearch: SubmitHandler<SearchInputs> = (formFields) => {
    alert(JSON.stringify(formFields))
  }

  return (
      <form onSubmit={handleSubmit(handleSearch)} className='flex items-center gap-4'>
        <div className='max-w-[420px] w-full'>
          <CustomInput
              placeholder="Написать отзыв"
              name="comment"
              errors={errors.comment}
              register={register}
              required={true}
              minLength={10}
          />
        </div>
        <button className='text-white text-[15px] font-bold px-[15px] bg-[#ea003d] self-stretch rounded disabled:opacity-50 transition-opacity duration-300' disabled={!watch().comment}>Отправить</button>
      </form>
  );
};
