import {AppLink} from "shared/ui";
import {classNames} from "shared/lib";

import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

export const NavBar = ({className}: NavBarProps) => {
  return (
    <div className={classNames(cls.NavBar)}>
      <div className={cls.links}>
        <AppLink to={'/'}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  );
};

