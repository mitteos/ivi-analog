import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const mockNavItems = [
  {id: 1, title: 'Создатели', path: 'creators', count: null},
  {id: 2, title: 'Отзывы', path: 'reviews', count: 219},
  {id: 3, title: 'Трейлеры', path: 'trailers', count: 8},
  {id: 4, title: 'Награды', path: 'awards', count: 6},
]

export const ModalNavigation = () => {

  const {query} = useRouter()

  return (
      <div className='flex items-center gap-10 border-b-2 border-[#39373E] pb-1.5 mb-8'>
        {mockNavItems.map(el =>
            <Link key={el.id} href={{pathname: "/movie/1", query: {modal: el.path}}} className='flex gap-x-1'>
              <p className={`font-bold ${query.modal === el.path ? 'opacity-100 underline underline-offset-[12px] decoration-4 decoration-[#EA003D]' : 'opacity-[0.72]'} text-white text-[15px] transition-opacity duration-300 hover:opacity-100`}>{el.title}</p>
              {el.count &&
                <p className='self-start text-[#a5a1b2] text-[13px]'>{el.count}</p>
              }
            </Link>
        )}
      </div>
  );
};
