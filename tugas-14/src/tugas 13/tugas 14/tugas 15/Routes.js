import React from "react";
import { Switch, Link, Route } from "react-router-dom";

// import Tugas11 from './tugas 11/Tugas11';
// import Timer from './tugas 12/Timer';
// import Tugas13 from './tugas 13';
// import Tugas14 from './tugas 13/tugas 14/Tugas14';
// import Fruit from './tugas 13/tugas 14/tugas 15/Fruit';

import Tugas1 from '../../../tugas 11/Fruit'
import Tugas2C from '../../../tugas 12/Clock'
import Tugas2T from '../../../tugas 12/Timer'
import Tugas3T from '../../../tugas 13/Tugas13'
import Tugas4 from '../../tugas 14/Tugas14'
import Tugas5 from './Fruit'


const Routes = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tugas11">Tugas 11 Component-Props</Link>
          </li>
          <li>
            <Link to="/tugas12.1">Tugas 12.1</Link>
          </li>
          <li>
            <Link to="/tugas12.2">Tugas 12.2 Timer</Link>
          </li>
          
          <li>
            <Link to="/tugas13">Tugas 13 List</Link>
          </li>
          <li>
            <Link to="/tugas14">Tugas 14 Hooks and Rest API</Link>
          </li>
          <li>
            <Link to="/tugas15">Tugas 15 Context and Router</Link>
          </li>


        </ul>
      </nav>
      <Switch>
        <Route path="/tugas11">
          <Tugas1 />
        </Route>
        <Route path="/tugas12.1">
          <Tugas2C />
        </Route>
        <Route path="/tugas12.2">
          <Tugas2T time='300' />
        </Route>
        
        <Route path="/tugas13">
          <Tugas3T />
        </Route>
        <Route path="/tugas14">
          <Tugas4 />
        </Route>
        <Route path="/tugas15">
          <Tugas5 />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
