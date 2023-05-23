import React from 'react';

import Gear from '../assets/svgs/Gear';
import Bookmark from '../assets/svgs/Bookmark';
type Props = {};

function EditorHeader({}: Props) {
  return (
    <div className="bg-[#303030] py-2 rounded-tl-lg rounded-tr-lg px-4 flex items-center justify-between">
      <p className="text-[13px]">JavaScript</p>
      <div className="flex items-center gap-2">
        <Bookmark className="w-4" />
        <Gear className="w-4" />
      </div>
    </div>
  );
}

export default EditorHeader;
