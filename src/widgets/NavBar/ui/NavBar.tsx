import { AppLink } from 'shared/ui';
import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';

import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.NavBar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/">{t('Главная')}</AppLink>
        <AppLink to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
}
