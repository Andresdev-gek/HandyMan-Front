import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'
import Home from '../pages/Home'
import CreateServiceReport from '../pages/CreateServiceReport'
import ListReports from '../pages/ListReports'
import CalculateHours from '../pages/CalculateHours'

function App() {

  //rutas de la app
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createReport" component={CreateServiceReport} />
        <Route exact path="/listReports" component={ListReports} />
        <Route exact path="/hoursService" component={CalculateHours} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>




  );
}

export default App
