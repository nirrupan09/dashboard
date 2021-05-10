import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserContext from "./userContext"


export default function UserList(){
    let users = useContext(UserContext);
    let [userList,setUserList] = useState([]);
    

    useEffect(async() => {
        let users = await fetch("https://5cdd0a92b22718001417c19d.mockapi.io/users");
        let userData = await  users.json();
        console.log(userData)
        setUserList([...userData])
    },[])
    return(
        <>
          
                    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                  <Link to="/usercreate" >createuser</Link>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                        {
                            userList.length > 0  ?<div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>
                                            <Link to="/useredit">UserEdit </Link>
                                            </th>
                                                                                       
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                         users.userList.map((obj) => {
                                                return   <tr>
                                                <td>{obj.name}</td>
                                                <td>{obj.lastName}</td>
                                                <td>{obj.email}</td>
                                                <td>{obj.password}</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                                <th>
                                                <Link to={`/useredit/${obj.id}`}> User Edit </Link>
                                                </th>
                                            </tr>

                                            })
                                        }
                                                                       
                                    </tbody>
                                </table>
                            </div> :<>
                            <h1>loading</h1>
                            </>
                        
                                    }
                        </div>
                    </div>
               
        </>
    )
}