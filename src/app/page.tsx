'use client';
import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';
import { Resizable } from 're-resizable';
import Gear from '../assets/svgs/Gear';
import DoubleLeft from '../assets/svgs/DoubleLeft';
import DoubleRight from '../assets/svgs/DoubleRight';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col py-5 px-5">
      <div className="shrink-0 flex items-center justify-between">
        <h1 className="font-medium">LeetMode</h1>

        <div className="py-2 bg-[#282C34] px-3 rounded-lg flex items-center gap-2">
          <DoubleLeft className="w-5 cursor-pointer" />
          <h1>
            Problem #1: <span>Solve for x</span>
          </h1>
          <DoubleRight className="w-5 cursor-pointer" />
        </div>

        <div>
          <p className="text-sm">akmalraj07</p>
        </div>
      </div>
      <div className="shrink-0 flex justify-end">
        <Gear className="w-6" />
      </div>
      <div className="h-[90%] flex w-full pt-5">
        <div className="w-full h-full bg-[#282C34]"></div>

        <div className="shrink-0 h-full flex items-center justify-center w-3 bg-[#1B1E28]"></div>

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
            <div className="h-full bg-[#282C34] min-h-[30%]">
              <CodeMirror
                value="console.log('hello world'"
                theme="dark"
                className={`h-full`}
                extensions={[javascript({ jsx: true })]}
              />
            </div>
            <div className="shrink-0 h-3 w-full bg-[#1B1E28]"></div>
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
              <div className="h-full bg-[#282C34] flex flex-col">
                <div className="flex-1"></div>
                <div className="px-4 pt-2 pb-4 ml-auto flex gap-5 items-center">
                  <button className="bg-blue-500 rounded-lg px-5 py-2 cursor-pointer hover:bg-blue-400 transition-[background]">
                    Run
                  </button>
                  <button className="bg-green-500 rounded-lg px-5 py-2 cursor-pointer hover:bg-green-400 transition-[background]">
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
