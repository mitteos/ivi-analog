import React from 'react';
import {CreatorsItem} from "@/components/screens/movie/components";

export const Creators = () => {
  return (
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-white font-bold text-2xl'>Режиссёр</h1>
          <div className='flex gap-5 flex-wrap'>
            <CreatorsItem isModal={true}/>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='text-white font-bold text-2xl'>Актёры</h1>
          <div className='flex gap-5 flex-wrap'>
            <CreatorsItem isModal={true}/>
            <CreatorsItem isModal={true}/>
            <CreatorsItem isModal={true}/>
            <CreatorsItem isModal={true}/>
            <CreatorsItem isModal={true}/>
          </div>
        </div>
      </div>
  );
};
