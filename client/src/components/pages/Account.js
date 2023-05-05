import React, { useState, useEffect } from 'react'
import { userData as Data } from '../../services/api';
import { updateUser } from '../../services/api';

// Need to do something with the profile.
// Date of birth has bug
// After it can update all input fields, do something with the design
// Probably need to import the header and footer
function Account() {
    const [editContactInformation, setEditContactInformation] = useState(false);
    const [editBasicInformation, setEditBasicInformation] = useState(false);
    const [userData, setUserData] = useState(null);



    const toggleEditBasicInformation = () => {
        setEditBasicInformation(!editBasicInformation);
    };

    const toggleContactInformation = () => {
        setEditContactInformation(!editContactInformation);
    };

    const newData = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUser(userData.member_id, userData);
            console.log(updatedUser);
            console.log("success");
        } catch (error) {
            console.error(error);
        }

    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Data();
                setUserData(response);
            } catch (error) {
                console.error('User not Found: ', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <h1>This is Account</h1>
            <main>
                <div className="row w-75 mx-auto border border p-2 mt-5">
                    <div className='col-2'>
                        <div><img src='' alt='asdqew' /></div>
                    </div>
                    <div className="col-10">
                        <header>
                            <h2 className='m-0'>Profile</h2>
                            {editBasicInformation && <p className='text-danger'>*required fields</p>}
                        </header>
                        <section className='container'>
                            <h4 className='border-bottom pb-2'>
                                Basic Information <span>{!editBasicInformation && <button type='button' onClick={toggleEditBasicInformation}>Edit</button>}</span>
                            </h4>

                            {editBasicInformation && userData ?
                                <>
                                    <form action="" onSubmit={newData}>
                                        <div className='row mb-4'>
                                            <div className='col-4'>
                                                <label htmlFor='first_name' className='form-label fw-bold'><span className='text-danger'> *</span>First Name</label>
                                                <input
                                                    type='text'
                                                    name='first_name'
                                                    id='first_name'
                                                    className='form-control'
                                                    value={userData.first_name || ''}
                                                    onChange={(e) => setUserData({ ...userData, first_name: e.target.value })}
                                                />
                                            </div>
                                            <div className='col-4'>
                                                <label htmlFor='middle_name' className='form-label fw-bold'>Middle Name</label>
                                                <input
                                                    type='text'
                                                    name='middle_name'
                                                    id='middle_name'
                                                    className='form-control'
                                                    value={userData?.middle_name || ''}
                                                    onChange={(e) => setUserData({ ...userData, middle_name: e.target.value })}
                                                />
                                            </div>
                                            <div className='col-4'>
                                                <label htmlFor='last_name' className='form-label fw-bold'><span className='text-danger'> *</span>Last Name</label>
                                                <input
                                                    type='text'
                                                    name='last_name'
                                                    id='last_name'
                                                    className='form-control'
                                                    value={userData?.last_name || ''}
                                                    onChange={(e) => setUserData({ ...userData, last_name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className='row justify-content-between mb-4'>
                                            <div className='col-5'>
                                                <label htmlFor='gender' className='form-label fw-bold'>Gender</label>
                                                <select name='gender' className='form-control' id='gender' value={userData?.gender || ''} onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                                                    <option value=''>Select</option>
                                                    <option value='Male' >Male</option>
                                                    <option value='Female'>Female</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                            </div>
                                            {/* Encoutered a problem here on Date of Birth  */}
                                            {/* <div className='col-5'>
                                              
                                                <label htmlFor='date_of_birth' className='form-label'>Birthday</label>
                                                <input
                                                    type='date'
                                                    name='date_of_birth'
                                                    className='form-control'
                                                    id='date_of_birth'
                                                    value={userData.date_of_birth}
                                                    onChange={(e) => setUserData({ ...userData, date_of_birth: e.target.value })}
                                                />
                                            </div> */}

                                        </div>
                                        <div className='d-flex justify-content-end gap-4'>
                                            <button type='submit' className='btn btn-success'>Submit</button>
                                            <button type='button' className='btn btn-secondary' onClick={toggleEditBasicInformation}>Cancel</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='row'>
                                        <div className='col-6'>The label</div>
                                        <div className='col-6'>Data</div>
                                    </div>
                                </>
                            }
                        </section>

                        {/* Contact Information */}
                        <section className='container'>
                            <h4 className='border-bottom pb-2'>
                                Conactt Information <span>{!editContactInformation && <button type='button' onClick={toggleContactInformation}>Edit</button>}</span>
                            </h4>

                            {editContactInformation && userData ?
                                <>
                                    <form onSubmit={newData}>
                                        <div className='row mb-4'>
                                            <div className='col-4'>
                                                <label htmlFor='email' className='form-label fw-bold'><span className='text-danger'> *</span>Email</label>
                                                <input
                                                    type='email'
                                                    name='email'
                                                    id='email'
                                                    className='form-control'
                                                    value={userData.email || ''}
                                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className='col-4'>
                                                <label htmlFor='phone_number' className='form-label fw-bold'>Phone Number</label>
                                                <input
                                                    type='number'
                                                    name='phone_number'
                                                    id='phone_number'
                                                    className='form-control'
                                                    value={userData?.phone_number || ''}
                                                    onChange={(e) => setUserData({ ...userData, phone_number: e.target.value })}
                                                />
                                            </div>
                                            <div className='col-4'>
                                                <label htmlFor='address' className='form-label fw-bold'>Address</label>
                                                <input
                                                    type='text'
                                                    name='address'
                                                    id='address'
                                                    className='form-control'
                                                    value={userData?.address || ''}
                                                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end gap-4'>
                                            <button type='submit' className='btn btn-success'>Submit</button>
                                            <button type='button' className='btn btn-secondary' onClick={toggleContactInformation}>Cancel</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='row'>
                                        <div className='col-6'>The label</div>
                                        <div className='col-6'>Data</div>
                                    </div>
                                </>
                            }

                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Account;
