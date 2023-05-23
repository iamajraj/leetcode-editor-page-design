'use client';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { Resizable } from 're-resizable';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import LeftArrow from '../assets/svgs/LeftArrow';
import RightArrow from '../assets/svgs/RightArrow';
import Bar from '../assets/svgs/Bar';
import { Patrick_Hand } from 'next/font/google';

const font = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col">
      <div className="shrink-0 flex items-center justify-between bg-[#282828] px-5 py-1">
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
      <div className="h-[98%] flex w-full pt-2 pb-2 px-2">
        <div className="w-full h-full bg-[#282828] rounded-md"></div>

        <div className="shrink-0 h-full flex items-center justify-center w-3 bg-[#1A1A1A]"></div>

        <Resizable
          defaultSize={{
            width: '50%',
            height: '100%',
          }}
          enable={{
            left: true,
          }}
          maxWidth="65%"
          minWidth="30%"
        >
          <div className="flex w-full flex-col h-full">
            <div className="h-full bg-[#282828] min-h-[30%]">
              <CodeMirror
                value="console.log('hello world'"
                theme={okaidia}
                className={`h-full`}
                extensions={[javascript({ jsx: true })]}
              />
            </div>
            <div className="shrink-0 h-3 w-full bg-[#1A1A1A]"></div>
            <Resizable
              defaultSize={{
                width: 'auto',
                height: '50%',
              }}
              enable={{
                top: true,
              }}
              className="h-full"
              maxHeight="66%"
              minHeight="40%"
              boundsByDirection
            >
              <div className="h-full bg-[#282828] flex flex-col rounded-md">
                <div className="flex-1"></div>
                <div className="px-4 pt-2 pb-4 flex gap-5 items-center bg-[#303030] justify-end border-t border-t-gray-600">
                  <button className="bg-[#4D4D4D] rounded-lg px-5 py-1 cursor-pointer hover:bg-blue-400 transition-[background] text-[13px]">
                    Run
                  </button>
                  <button className="bg-green-500 rounded-lg px-5 py-1 cursor-pointer hover:bg-green-400 transition-[background] text-[13px]">
                    Submit
                  </button>
                </div>
              </div>
            </Resizable>
          </div>
        </Resizable>
      </div>
    </main>
  );
}
