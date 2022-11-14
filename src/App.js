import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import { ProfileDetailPage } from "./components/ProfileDetailPage";
import { FeedPage } from "./components/FeedPage";
import { HomePage } from "./components/HomePage";
function App() {
  return (
    <div>
      <Router>
        <ul>
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
          <Route exact path="/jobs" component={ProfilePage} />
          <Route path="/jobs/:id" component={ProfileDetailPage} />
          {/* <Route path="/feed" component={FeedPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
