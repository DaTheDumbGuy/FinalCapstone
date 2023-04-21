import React, { useState, useEffect } from 'react';
import { fetchReviews } from '../../services/api';
//Testing serverside
function DisplayUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchReviews()
            .then((res) => setData(res.data))
            .catch((err) => {
                console.log(err);
                alert(`Error Fetching Data from the API ${err}`);
            });
    }, []);

    return (
        <div>
            <h1>This is DIsplayUsers</h1>
            {data.map((data) => (
                <div key={data.member_id}>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Member ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Marital Status</th>
                                <th>Occupation</th>
                                <th>Date Joined</th>
                                <th>Membership Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.member_id}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.address}</td>
                                <td>{data.phone_number}</td>
                                <td>{data.email}</td>
                                <td>{data.date_of_birth}</td>
                                <td>{data.gender}</td>
                                <td>{data.marital_status}</td>
                                <td>{data.occupation}</td>
                                <td>{data.date_joined}</td>
                                <td>{data.membership_status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default DisplayUsers;
