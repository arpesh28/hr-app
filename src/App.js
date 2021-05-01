import {
  BrowserRouter as Router,
   Redirect,
   Route,
  Switch,
} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Screens
import Dashboard from './screens/dashboard/Dashboard'
import AddApplicant from './screens/add-applicant/AddApplicant'
import CreateJob from './screens/create-job/CreateJob'
import ListApplicants from './screens/list-applicants/ListApplicants'
import Search from './screens/search/Search'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route  path="/createjob" component={CreateJob} />
        <Route  path="/addapplicant" component={AddApplicant} />
        <Route  path="/listapplicants" component={ListApplicants} />
        <Route  path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
