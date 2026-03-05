import { useState } from "react"
import axios from "axios";
function Add(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null)
    const handleForm = ()=>{
        axios.post('http://localhost:8000/adduser', {
            name: name,
            password: password
        }).then((response)=>{
            console.log(response.data)
        })
    }
    return(
        <>
        <form action="" onSubmit={handleForm}>
            <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <button>Save</button>
            </div>
            {message}
        </form>
        </>
    )
}

export default Add