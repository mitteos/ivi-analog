import React, {useEffect} from 'react';
import {ModalNavigation} from "@/components/screens/movie/components";
import {useRouter} from "next/router";
import {Awards, Creators, Reviews, Trailers} from "@/components/screens/movie/components/Modal";



export const Modal = () => {

  const tabs = [
    {id: 1, query: 'creators', component: Creators},
    {id: 2, query: 'reviews', component: Reviews},
    {id: 3, query: 'trailers', component: Trailers},
    {id: 4, query: 'awards', component: Awards},
  ]

  const {query} = useRouter()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  return (
      <div className='fixed top-0 left-0 z-20 w-full h-full bg-[rgba(0,0,0,0.85)] overflow-auto py-10'>
        <div className='w-[95%] mx-auto mb-4'>
          <button className='flex gap-x-3 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                 stroke="currentColor" className="w-5 h-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
            </svg>
            <p className='text-white font-bold'>К фильму</p>
          </button>
        </div>
        <div className='max-w-[1200px] mx-auto w-[90%]'>
          <p className='font-bold text-4xl text-white mb-5'>Зеленая книга (Фильм 2018)</p>
          <ModalNavigation />
          {tabs.map(el =>
              <div key={el.id}>
                {el.query === query.modal && el.component()}
              </div>
          )}
        </div>
      </div>
  );
};
