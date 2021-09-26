import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Person from '../Person/Person';
import './Winners.css';

const Winners = () => {

    const [persons, setPersons] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('./nobel-winners.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])


    const handleAddToList = (person) => {
        const newList = [...list, person]
        setList(newList);
    }

    return (
        <div className="winners-container">
            <div className="all-winners">
                {
                    persons.map(person => <Person
                        person={person}
                        handleAddToList={handleAddToList}
                    ></Person>)
                }
            </div>
            <div>
                <List list={list}></List>
            </div>
        </div>
    );
};

export default Winners;