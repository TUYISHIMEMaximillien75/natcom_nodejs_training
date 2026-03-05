import axios from "axios"

import { useEffect, useState } from "react";

function Table() {

    const [list, setList] = useState([]);

    const getUsers = () => {
        axios.get('http://localhost:8000/getallusers').then((response) => {
            setList(response.data)
        })
    }

    useEffect(() => {
        getUsers();
    })

    return (
        <>
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Operation</th>
                </thead>
                <tbody>
                    {list.map((val, index) => {
                        return (
                            <tr>
                                <td>{index +1}</td>
                                <td>{val.name}</td>
                                <td>{val.password}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </>
    )
}
export default Table