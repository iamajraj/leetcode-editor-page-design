import React from 'react';
import LeftArrow from '../assets/svgs/LeftArrow';
import RightArrow from '../assets/svgs/RightArrow';
import Bar from '../assets/svgs/Bar';
import { Patrick_Hand } from 'next/font/google';

const font = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
});

type Props = {};

function Nav({}: Props) {
  return (
    <div className="shrink-0 flex items-center justify-between bg-[#282828] px-5 py-0">
      <h1 className={`${font.className} text-[17px]`}>LeetMode</h1>

      <div className="py-2 px-3 rounded-lg flex items-center gap-3">
        <LeftArrow
          className="cursor-pointer px-2 py-2 bg-[#343434] rounded-md"
          svgClassName="w-4"
        />
        <div className="flex items-center gap-2 cursor-pointer">
          <Bar svgClassName="h-4" />
          <h1 className="text-[13px] font-medium">Problem List</h1>
        </div>
        <RightArrow
          className="cursor-pointer px-2 py-2 bg-[#464646] rounded-md"
          svgClassName="w-4"
        />
      </div>

      <div className="flex items-center gap-4">
        <p className="bg-[#464646] rounded-md px-3 text-sm py-1 text-yellow-400 cursor-pointer">
          Premium
        </p>
        <img
          src="https://assets.leetcode.com/users/avatars/avatar_1679847253.png"
          alt="profile"
          className="w-[30px] h-[30px] rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Nav;
