import { useState } from "react"
import axios from "axios"

function Update(){

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleForm = (event)=>{
        event.preventDefault()

        if(id === "" || name === "" || password === ""){
            setError("Please fill all the fields")
            return
        }

        setLoading(true)

        axios.put(`http://localhost:8000/updateuser/1`,{
            name:name,
            password:password
        })
        .then((response)=>{
            setMessage(response.data.message)
            setError("")
            setLoading(false)
        })
        .catch(()=>{
            setError("Something went wrong")
            setLoading(false)
        })
    }

    return(
        <>
        <form onSubmit={handleForm}>

            <div className="form-group">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <button>
                    {loading ? "Updating..." : "Update"}
                </button>
            </div>

            {error && <p style={{color:"red"}}>{error}</p>}
            {message && <p style={{color:"green"}}>{message}</p>}

        </form>
        </>
    )
}

export default Update