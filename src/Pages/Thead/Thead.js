import React from 'react';
import { Badge } from 'react-bootstrap';
const Thead = (props) => {
    const { use, set, person } = props;
    const cancelOrder = (id) => {
        const promice = window.confirm("Are You Sure Canceled")
        if (promice) {
            fetch(`https://blooming-temple-57474.herokuapp.com/add/${id}`, {
            method: 'DELETE',
            }).then(res => res.json())
            .then(data => {
            console.log(data);
            if(data.deletedCount) {
                const rem = person.filter(per => per._id !== id);
                set(rem)
            }    
            })
        }
    }
    return (
        <tr>
            <td style={{textAlign:"center"}}>{ use._id}</td>
            <td style={{textAlign:"center"}}>{ use.name}</td>
            <td style={{textAlign:"center"}}>{ use.email}</td>
            <td style={{textAlign:"center"}}>{ use.order}</td>
            <td onClick={()=>cancelOrder(use._id)} style={{cursor:"pointer",textAlign:"center",color:"red"}}><i className="fas fa-minus-circle"></i> Cancel</td>
            <td style={{ textAlign: "center" }}> <Badge bg="warning" text="dark">{use.status}</Badge></td>
        </tr>
    );
};

export default Thead;