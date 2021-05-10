
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard';

import {
  BrowserRouter as Router,
  Route,
  Switch 
  
}from "react-router-dom"
import UserList from './userlist';
import UserEdit from './useredit';
import UserCreate from './usercreate';
import {UserProvider} from './userContext'

function App() {
  return (
    <Router>
    <div id="wrapper">
      <Sidebar></Sidebar>
      <UserProvider>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar></Topbar>
      </div>
      <div id="container-fluid">
        
          <Switch>
            < Route path="/dashboard" component={Dashboard}  exact={true}/> 
            < Route path="/users" component={UserList}  exact={true}/> 
            < Route path="/useredit:id" component={UserEdit}  exact={true}/> 
            < Route path="/usercreate" component={UserCreate}  exact={true}/> 
                         
          </Switch>
        
      </div>
      
      </div>
      </UserProvider>
    </div>
    </Router>
  );
}

export default App;
