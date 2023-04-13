import {useState} from "react";
import {LangSwitcher, ThemeSwitcher} from "widgets";

import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => setCollapsed(prev => !prev)

  return (
    <div
      className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}
    >
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};