import {useEffect, useState} from "react";
import {useContext} from "react"
import UserContext from "./userContext";

export default function UserCreate(){

    let userData = useContext(UserContext)

    let [firstName,setfirstName] = useState("");
    let [lastName,setlastName] = useState("");
    let [email,setemail] = useState("");
    let [password,setpassword] = useState("");

    let userSubmit = async (e) => {
        e.preventDefault()

        userData.setUserList([...userData.userList,{
            firstName,
            lastName,
            email,
            password

        }])

        await fetch("https://5cdd0a92b22718001417c19d.mockapi.io/users",{
          method : "POST",
          body : JSON.stringify({
            firstName,
            lastName,
            email,
            password
          }),
          headers : {
              "Content-type" : "application/json"
          }
        })
    }

    useEffect(() => {
        console.log("During Creation")
    },[])



    useEffect(() => {
        console.log("just begining")
        return () => {
            console.log("Durring destroy")
        }
    })

    useEffect (() => {
        console.log("Durring the props change")
    }, [firstName])

    return(
        <>

        <div className="cointainer">
            <div className="row">
              <div className="col-lg-12">
                 <h1>User Form</h1>
              </div>
            </div>
        <form onSubmit={userSubmit}>
            <div className="row">
            <div  className="col-lg-6">
                <lable>Username</lable>
                <input className="form-control" value= {firstName} onChange={(e) => setfirstName(e.target.value)} />
            </div>
            <div  className="col-lg-6" >
                <lable>lastname</lable>
                <input className="form-control" value= {lastName} onChange={ (e) => setlastName(e.target.value)} />
            </div>
           </div>

           <div className="row" >
           <div  className="col-lg-6">
                <lable>email</lable>
                <input className="form-control" value= {email} onChange={ (e) => setemail(e.target.value)} />
            </div>

            <div  className="col-lg-6">
                <lable>password</lable>
                <input className="form-control" value= {password} onChange={ (e) => setpassword(e.target.value)} />
            </div>
           </div>

           <div  className="row">
           <div  className="col-lg-6">
               <input className="btn btn-primary" type="submit" value="submit"  />
               </div>
           </div>

          
            </form>
            </div>
        
        </>
    )
}