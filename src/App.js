import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { JobsPage } from "./components/JobsPage";
import { JobsDetailPage } from "./components/JobPage";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div>
      <Router>
        <ul> d
          <li>
            <Link to="/">To Home</Link>
          </li>
          <li>
            <Link to="/jobs">To Jobs Page</Link>
          </li>
          <li>
            <Link to="/jobs/job-details" exact>To Job Detail Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/jobs" component={JobsPage} />
          <Route path="/jobs/:id" component={JobsDetailPage} />
          {/* <Route path="/feed" component={FeedPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
