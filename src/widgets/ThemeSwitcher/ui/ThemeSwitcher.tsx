import {Button, ThemeButton} from "shared/ui/Button/Button";

import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'

import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/dark_theme.svg'
import LightIcon from 'shared/assets/light_theme.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ?  <DarkIcon /> : <LightIcon fill={'white'}/>}
    </Button>
  );
};