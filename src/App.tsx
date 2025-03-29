import React from 'react';
import './App.scss';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import routers from './Router';
import { Routes } from './Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <></>
      <HashRouter>
        <Switch>
          {routers.map((item: any, key: number) => {
            const RouteTag = item.canActivate ? item.canActivate[0] : Route;
            return (
              <RouteTag
                key={key}
                exact
                path={item.path}
                render={(props: any) => {
                  console.log(props, item, key);
                  return <div>{JSON.stringify(props)}</div>;
                }}
              />
            );
          })}
          <Redirect to={Routes.None} />
        </Switch>
        <ToastContainer></ToastContainer>
      </HashRouter>
    </>
  );
}

export default App;
