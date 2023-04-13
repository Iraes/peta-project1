import { AppLink } from "shared/ui";
import { classNames } from "shared/lib";

import cls from './NavBar.module.scss'
import {useTranslation} from "react-i18next";

interface NavBarProps {
  className?: string
}

export const NavBar = ({className}: NavBarProps) => {
 const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'}>{t('Главная')}</AppLink>
        <AppLink to={'/about'}>{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};

