import './styles/index.scss'
import { useTheme, AppRouter } from "app/providers";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar, Sidebar} from "widgets";
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();


  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <NavBar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;