import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComponentPage from './pages/ComponentPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="seo-demo-site-title">Super Real Site</h1>
          <div className="seo-demo-site-nav">
            <Link to="component/pkg:maven/org.sonatype/nexusmcnexusface@1.2.3">
              Try Some Maven
            </Link>
          </div>
        </header>


        <Switch>
          <Route path="/component/:purl+" component={ComponentPage} />

          <Route exact={true} path="/" component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
