import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import sagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';

import multiMiddleware from '../common/middleware/multi';
import transitionMiddleware from '../common/middleware/transition';
import createHistory from '../common/helpers/createHistory';
import routes from '../common/routes';

import Widget from './Widget';
import Content from './Content';
import reducer from './reducers';
import { enterContent } from './actions';
import sagas from './sagas';
import * as sections from './models/sections';

const { newNodePath, newNodeSectionPath } = routes;

const browserHistory = createHistory();

const createExtendedStore = applyMiddleware(
  multiMiddleware,
  thunkMiddleware,
  promiseMiddleware,
  transitionMiddleware(browserHistory),
  sagaMiddleware(...sagas)
)(createStore);

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createExtendedStore(reducer);
  }

  onEnterContent = (nextState, replace) => {
    this.store.dispatch(enterContent(nextState, replace));
  };

  render() {
    return (
      <Provider store={this.store}>
        <Router history={browserHistory}>
          <Redirect from={newNodePath.toString()} to={newNodeSectionPath(sections.NAME_CATEGORY)} />
          <Route path={newNodePath.toString()} component={Widget}>
            <Route
              path={newNodeSectionPath.toString()}
              component={Content}
              onEnter={this.onEnterContent}
            />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
