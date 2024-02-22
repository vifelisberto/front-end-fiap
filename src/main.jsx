import React from 'react'
import ReactDOM from 'react-dom/client'

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Layout } from './components/Layout';

import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { List } from './pages/List';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/:slug">
            <Post />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/list/:slug">
            <List />
          </Route>
          <Route exact path="*">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
)
