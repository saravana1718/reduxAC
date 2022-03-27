import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/central"
function Formdata() {
    const account = useSelector((state) => state.account)
    let user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const { changeUser } = bindActionCreators(actionCreators, dispatch)
    const [name, setname] = useState("")
   
    const handlechange = (e) => {
        setname(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        if(name.length>0){
        changeUser(name)
        setname("")
        }
    }
    return (
        <div>
            <h1>form component</h1>
            <input onChange={handlechange} value={name} />
            <button onClick={handlesubmit}  >submit</button>
            <p>the user is<span > {user}</span>  and his account balance <span > {account}</span> </p>
        </div>
    );
}

export default Formdata;