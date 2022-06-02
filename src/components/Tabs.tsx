import clsx from "clsx";
import React from "react";
import { StyledTabBar, StyledTabButton } from "./Tabs.styled";

interface TabProps {
  name: string;
  component: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  defaultTabName?: string;
}

const Tabs = ({ tabs, defaultTabName }: TabsProps) => {
  const _defaultTabName = defaultTabName || tabs[0].name;
  const [active, setActive] = React.useState<string>(_defaultTabName || "");

  const handleSelectTab = (name: string) => {
    setActive(name);
  };

  const TabButtons = () => (
    <StyledTabBar className="d-flex gap-3">
      {tabs.map(({ name }) => (
        <StyledTabButton
          key={name}
          active={active === name}
          onClick={() => handleSelectTab(name)}
        >
          {name}
        </StyledTabButton>
      ))}
    </StyledTabBar>
  );

  const activeTab = tabs.find(({ name }) => name === active);
  const TabActive = () => <div className="py-4">{activeTab?.component}</div>;

  return (
    <div className="py-4">
      {!tabs.length && (
        <div className="text-danger">Tabs array cannot be empty</div>
      )}
      <TabButtons />
      <TabActive />
    </div>
  );
};

export default Tabs;
