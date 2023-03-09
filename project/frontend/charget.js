import axios from "axios";
import React, { useState, useEffect } from "react";

const Table1 = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {

            try{    
                const response = await axios.get("http://localhost:2021/show");
                setDetails(response.data);
            }
            catch(e){
                console.log(e);
            }
        }
        fetchData();
    });
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:2021/Delete/${id}`)
        .then(response=>{
            const updated=response.filter((ANIME)=>ANIME.id!==id);
            setDetails(updated);
        });
    }
    return (
        <table  border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>born</th>
                    <th>age</th>
                    <th>series</th>
                    <th>written_by</th>
                    <th>RemoveChar</th>
                </tr>
            </thead>
            <tbody>
                {details.map(user => (
                    <tr key={user.id}>
                        <td d>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.born}</td>
                        <td>{user.age}</td>
                        <td>{user.series}</td>
                        <td>{user.written_by}</td>
                        <td><button onClick={()=>handleDelete(user.id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table1;