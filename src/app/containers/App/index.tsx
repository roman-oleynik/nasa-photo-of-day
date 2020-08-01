import React from 'react';
import './style.scss';
import { Switch, Route } from 'react-router-dom';
import { Main } from '../../components/Main/Wrapper';
import { PicturePage } from '../../components/PicturePage';

export function App() {
  return (
    <main className="App-Container">
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/picture/:date" exact component={PicturePage} />
      </Switch>
    </main>
  );
};
