import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';
import Allorder from '../Allorder/Allorder';

const Manage = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4582/add')
        .then(res => res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className="container mb-4">
            <h1 className="fw-bold text-center my-4 text-muted service-product">Manage All Order</h1>
            <Table bordered >
                <thead>
                    <tr>
                        <th style={{textAlign:"center"}}>ID</th>
                        <th style={{textAlign:"center"}}>Name</th>
                        <th style={{textAlign:"center"}}>Email</th>
                        <th style={{textAlign:"center"}}>Orders</th>
                        <th style={{textAlign:"center"}}>Cancel Orders</th>
                        <th style={{textAlign:"center"}}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(use => <Allorder key={use._id} use={use} user={user} set={setUser}/>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Manage;