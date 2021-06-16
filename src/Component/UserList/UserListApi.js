import React, { Component } from 'react';
import './UserList.css';
import axios from 'axios';

export default class UserListApi extends Component {
     constructor(){
          super();
          this.state={
          Users:[],
          totalpage:0,
          pagging: 1
          }
     }
      userdata(){
        console.log(this.state.pagging)
        console.log(this.state.pagging==this.state.totalpage)
      axios.get(`https://reqres.in/api/users?page=${this.state.pagging}`).then((res)=> {
        debugger
          this.setState({  Users:res.data.data,totalpage:res.data.total_pages});
          console.log(this.state.totalpage)
   })
     }
     componentDidMount(){
          debugger
          this.userdata();
      }
      nextbtnfun() {
              //  debugger
              // console.log(this.state.pagging)

              //  this.setState({
              //       pagging : this.state.pagging + value
              //   });
                this.userdata();
               }
               previousbutn(){
                this.userdata();
               }
     render() {
          return (
               <div>

{/* <h2>hello{res.email}</h2> */}
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">Email</th>
      <th scope="col">First_name</th>


      <th scope="col">Last_name</th>
      <th scope="col">Avatar</th>

    </tr>
  </thead>
  <tbody>
  {

  this.state.Users.map((res) => {
    
    return(
    <tr>
      
       <td>{res.id}</td>
       <td>{res.email}</td>
       <td>{res.first_name}</td>
       <td>{res.last_name}</td>
       <td><img src={res.avatar}/></td>

     </tr>
    );
})} 
    </tbody>
  </table>

<center>
  <ul class="pagination ">
    <li class="page-item"><button class="btn btn-primary" disabled={this.state.pagging == 1} onClick={() => this.previousbutn(this.state.pagging--)}>Previous</button></li>
    
    <li class="page-item btnxext"><button class="btn btn-priymary" disabled={this.state.totalpage == this.state.pagging} href="#" onClick={() => this.nextbtnfun(this.state.pagging++)}>Next</button></li>
   
    
  </ul>
  </center>
               </div>
          );
     }
}


