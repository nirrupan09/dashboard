import { useEffect} from "react"

export default function UserEdit(props){
    console.log(props)

    useEffect(async() => {
        let user = await fetch(`https://5cdd0a92b22718001417c19d.mockapi.io/users/${props.match.params.id}`)
        let userData = await user.json()
        console.log(userData)
    },[])


    return(
        <>
        <h1>User Edit{props.match.params.id}</h1>
        </>
    )
}