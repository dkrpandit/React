// Challenge 7

import React, { useState } from 'react';
import '../CSS/Forms.css';

const Form1 = () => {
    const [fullName, setFullName] = useState({
        fName: '',
        lName: '',
        email: '',
        mobileNumber: ''
    });

    const inputEvent = (event) => {

        const name = event.target.name
        const value = event.target.value

        setFullName((obj) => {
            if (name === 'fName') {
                return {
                    fName: value,
                    lName: obj.lName,
                    email: obj.email,
                    mobileNumber: obj.mobileNumber
                };
            } else if (name === 'lName') {
                return {
                    fName: obj.fName,
                    lName: value,
                    email: obj.email,
                    mobileNumber: obj.mobileNumber
                };
            }
            else if (name === 'email') {
                return {
                    fName: obj.fName,
                    lName: obj.lName,
                    email: value,
                    mobileNumber: obj.mobileNumber
                };
            }
            else if (name === 'mobileNumber') {
                return {
                    fName: obj.fName,
                    lName: obj.lName,
                    email: obj.email,
                    mobileNumber: value
                };
            }
        });
    };

    const submit = (event) => {
        event.preventDefault();
        // You can do something with the form data here
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="container">
                    <h1 className="name">Hello {fullName.fName} {fullName.lName}</h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.mobileNumber}</p>
                    <input
                        onChange={inputEvent}
                        type="text"
                        placeholder="Enter Your Name"
                        value={fullName.fName}
                        className="inputField"
                        name="fName"
                    />
                    <input
                        onChange={inputEvent}
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={fullName.lName}
                        className="inputField"
                        name="lName"
                    />
                    <input
                        onChange={inputEvent}
                        type="text"
                        placeholder="Enter Your email"
                        value={fullName.email}
                        className="inputField"
                        name="email"
                    />
                    <input
                        onChange={inputEvent}
                        type="text"
                        placeholder="Enter Your Mobile number"
                        value={fullName.mobileNumber}
                        className="inputField"
                        name="mobileNumber"
                    />
                    <button className="submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form1;