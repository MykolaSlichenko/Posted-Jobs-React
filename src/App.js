import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { JobsPage } from "./components/JobsPage";
import { JobsDetailPage } from "./components/JobPage";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobsPage} />
          <Route path="/jobs/:jobId" component={JobsDetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
