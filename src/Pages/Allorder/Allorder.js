import React from 'react';
import { Badge } from 'react-bootstrap';

const Allorder = (props) => {
    const { _id, name, email, order, status } = props.use;
    const { user,set,index } = props;
    // console.log(user);
    const deleteCancel = (id) => {
        const process = window.confirm("Are You Sure Canceled")
        if (process) {
            fetch(`https://blooming-temple-57474.herokuapp.com/add/${id}`, {
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
    const handelPanding = id => {
        // console.log(id);
        fetch(`https://blooming-temple-57474.herokuapp.com/add/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            // console.log(data)
            if (data.modifiedCount > 0) {
                alert(`${name} Approved Successfully`)
            }
        })
    }
    return (
        <tr>
            <td style={{textAlign:"center"}}>{index+1}</td>
            <td style={{textAlign:"center"}}>{name}</td>
            <td style={{textAlign:"center"}}>{email}</td>
            <td style={{textAlign:"center"}}>{order}</td>
            <td onClick={() => { deleteCancel(_id) }} style={{ cursor: "pointer", textAlign: "center", color: "red" }}><i className="fas fa-minus-circle"></i> Cancel Order</td>
            <td style={{ textAlign: "center" }}> <Badge bg="warning" text="dark">{status}</Badge> <span onClick={()=>{handelPanding(_id)}} style={{cursor:"pointer"}}><i className="fas fa-check-circle text-success"></i></span></td>
        </tr>
    );
};

export default Allorder;