import React from 'react';
import './Person.css';

const Person = (props) => {

    const { name, gender, country, field, salary, ageWhenWonNobel, image } = props.person;

    return (
        <div className="person-container">
            <div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h4 className="person-name">Name: {name}</h4>
                    <p>Gender: {gender}</p>
                    <p>Country: {country}</p>
                    <p>Field: {field}</p>
                    <p><small>He/She won nobel at {ageWhenWonNobel} years old.</small></p>
                    <h5>Salary: ${salary}</h5>

                    <button
                        onClick={() => props.handleAddToList(props.person)}
                        className="btn-regular"
                    >{<i class="fas fa-hand-pointer addIcon"></i>} Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Person;