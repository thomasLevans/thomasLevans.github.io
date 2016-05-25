import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import d3 from 'd3';

import configureStore from './store';
import App from './components/app';
import Who from './components/who';
import { SkillsContainer } from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Contributions from './components/contributions';
import Contact from './components/contact';

import skills from '../dist/assets/skills';

const part = d3.layout.partition()
  .sort(null)
  .size([Math.PI * 2, Math.pow(250, 2)])
  .value(d => 1);

const store = configureStore({ skills: part.nodes(skills) });

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App }>
        <Route path='/who' component={ Who } />
        <Route path='/skills' component={ SkillsContainer } />
        <Route path='/experience' component={ Experience } />
        <Route path='/education' component={ Education } />
        <Route path='/contributions' component={ Contributions } />
        <Route path='/contact' component={ Contact } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
