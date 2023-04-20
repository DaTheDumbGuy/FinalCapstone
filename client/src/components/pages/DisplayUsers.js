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
            {data.map((data) => (
                <div key={data.user_id}>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.user_id}</td>
                                <td>{data.first_name}</td>
                                <td>{data.middle_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default DisplayUsers;
