import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from "@pages/homepage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}
