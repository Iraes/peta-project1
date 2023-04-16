import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter: FC<{ name: string; surname: string; name2: string; surname2?: string}> = ({
  name, surname, name2, surname2,
}) => (
  <Suspense fallback={<div> Loading.... </div>}>
    <Routes>
      {Object.values(RouteConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
