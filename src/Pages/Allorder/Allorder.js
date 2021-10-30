import React, { useEffect,useState } from 'react';
import { Badge } from 'react-bootstrap';

const Allorder = (props) => {
    const { _id, name, email, order, status } = props.use;
    const [users,setUsers] = useState([])
    const { user,set } = props;
    console.log(user);
    const deleteCancel = (id) => {
        const process = window.confirm("Are You Sure Canceled")
        if (process) {
            fetch(`http://localhost:4582/add/${id}`, {
            method : "DELETE"
            })
            .then(res => res.json())
            .then(data=>{
                if (data.deletedCount) {
                    const rem = user.filter(use => use._id !== id);
                    set(rem)
                    // console.log(rem);
                    alert("Delete Successfully");
                }
            })
        }
    }
    useEffect(() => {
        fetch('http://localhost:4582/add')
        .then(res => res.json())
        .then(data=>setUsers(data))
    },[])
    const handelPanding = id => {
        // console.log(id);
        const finding = users.find(usering => usering._id === id);
        finding.status = "Approved";
        console.log(finding);
        fetch('http://localhost:4582/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(finding),
        })
            .then(res => res.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
        console.error('Error:', error);
        });
    }
    return (
        <tr>
            <td style={{textAlign:"center"}}>{_id}</td>
            <td style={{textAlign:"center"}}>{name}</td>
            <td style={{textAlign:"center"}}>{email}</td>
            <td style={{textAlign:"center"}}>{order}</td>
            <td onClick={() => { deleteCancel(_id) }} style={{ cursor: "pointer", textAlign: "center", color: "red" }}><i className="fas fa-minus-circle"></i> Cancel Order</td>
            <td style={{ textAlign: "center" }}> <Badge bg="warning" text="dark">{status}</Badge> <span onClick={()=>{handelPanding(_id)}} style={{cursor:"pointer"}}><i className="fas fa-check-circle text-success"></i></span></td>
        </tr>
    );
};

export default Allorder;