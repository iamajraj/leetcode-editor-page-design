import React from 'react';

import TabHeader from '../components/TabHeader';

type Props = {};

function Console({}: Props) {
  return (
    <div className="h-full bg-[#282828] flex flex-col rounded-md overflow-hidden">
      <TabHeader
        activeKey="testcase"
        onTabChange={(key) => {
          console.log(key);
        }}
        className="pt-2"
        items={[
          {
            key: 'testcase',
            label: 'Testcase',
            onClick: () => {},
          },
          {
            key: 'result',
            label: 'Result',
            onClick: () => {},
          },
        ]}
      />
      <div className="flex-1"></div>
      <div className="px-4 pt-2 pb-2 flex gap-5 items-center bg-[#303030] justify-end border-t border-t-[#444444]">
        <button className="bg-[#4D4D4D] rounded-lg px-5 py-1 cursor-pointer hover:bg-blue-400 transition-[background] text-[13px]">
          Run
        </button>
        <button className="bg-green-500 rounded-lg px-5 py-1 cursor-pointer hover:bg-green-400 transition-[background] text-[13px]">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Console;
