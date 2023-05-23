import React, { HTMLAttributes, useState } from 'react';

type TextProps = {
  label: string;
  key: string;
  active?: boolean;
  element?: React.ReactElement;
  onClick?: () => void;
};

type Props = {
  onTabChange: (label: string) => void;
  activeKey?: string;
  defaultActive?: string;
  items: TextProps[];
  className?: string;
};

function TabHeader({
  items,
  activeKey: _activeKey,
  onTabChange,
  className,
}: Props) {
  const [activeTab, setActiveTab] = useState(_activeKey ?? items[0].key);
  return (
    <div
      className={`bg-[#303030] px-4 flex items-center gap-5 border-b border-b-[#444444] ${className}`}
    >
      {items?.map((item) => {
        return item.label ? (
          <p
            onClick={() => {
              setActiveTab(item.key);
              onTabChange(item.key);
            }}
            className={`text-[13px] py-2 cursor-pointer ${
              activeTab === item.key ? 'active-underline' : ''
            } `}
          >
            {item.label}
          </p>
        ) : (
          item.element && item.element
        );
      })}
    </div>
  );
}

export default TabHeader;
