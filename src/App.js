import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Component/Header/Navbar';
import TodoList from './Component/Todo/TodoList';
import UserListApi from './Component/UserList/UserListApi';
import Home from './Component/Home';
function App() {
  return (
    <Router>
   <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/todoList">
          <TodoList/>
        </Route>
        <Route path="/UserListApi">
          <UserListApi/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
