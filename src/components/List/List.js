import React from 'react';
import './List.css';

const List = (props) => {
    const { list } = props;

    let totalQuantity = 0;
    let total = 0;
    let name;

    for (const person of list) {
        if (!person.quantity) {
            person.quantity = 1;
        }
        total = total + person.salary * person.quantity;
        totalQuantity = totalQuantity + person.quantity;
        name = [...person.name];
    }

    return (
        <div className="list-count">
            <div className="nobel">
                <img src="https://pngimg.com/uploads/un/un_PNG5.png" alt="" />
            </div>
            <h2>Selection Summary</h2>
            <h4>Person added: {totalQuantity}</h4>
            <h4>Total Cost: {total}</h4>
            <p>Added person name: {name}</p>
        </div>
    );
};

export default List;