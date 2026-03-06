import { useState } from "react"
import axios from "axios";
function Add() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleForm = (event) => {
        event.preventDefault();

        if (name == "" || password == "") {
            setError("Fill all fields")
        } else {
        setLoading(true)

            axios.post('http://localhost:8000/adduser', {
                name: name,
                password: password
            }).then((response) => {
                setMessage(response.data.message)
                setError(null)
                setLoading(false)
            })
        }


    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <button onClick={handleForm}>{loading ? "Saving..." : "Save"}</button>
                </div>
                {error}
                {message}
            </form>
        </>
    )
}

export default Add