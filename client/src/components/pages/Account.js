import React, { useState, useEffect } from 'react'
import { userData as Data } from '../../services/api';
import { updateUser } from '../../services/api';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import '../../styles/pages/Account.css'
import Footer from '../common/Footer';
import Header from '../common/Header';

function Account() {
    const [editContactInformation, setEditContactInformation] = useState(false);
    const [editBasicInformation, setEditBasicInformation] = useState(false);
    const [editBackground, setEditBackground] = useState(false);
    const [userData, setUserData] = useState(null);


    const toggleEditBasicInformation = () => {
        setEditBasicInformation(!editBasicInformation);
    };

    const toggleContactInformation = () => {
        setEditContactInformation(!editContactInformation);
    };

    const toggleEditBackground = () => {
        setEditBackground(!editBackground);
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

                const dbDate = new Date(response.date_of_birth);
                const localDate = new Date(dbDate.getTime() - (dbDate.getTimezoneOffset() * 60000));
                response.date_of_birth = localDate.toISOString().split('T')[0];

                setUserData(response);
            } catch (error) {
                console.error('User not Found: ', error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return (
        <>
            <Header />
            <main className='m-lg-5'>
                <div className="row w-75 mx-auto px-lg-5 py-lg-5 mt-5 rounded-4" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                    {/* for profile */}
                    {/* <div className='col-2'>
                        <div><img src='' alt='asdqew' /></div>
                    </div> */}
                    <div className="col-12">
                        <header>
                            <h2 className='m-0'>Profile</h2>
                            <div style={{ height: "30px" }}>{(editBasicInformation || editBackground || editContactInformation) ? <p className='text-danger m-0 p-0'>*required fields</p> : ''}</div>
                        </header>
                        <section className='container'>
                            <h4 className='border-bottom birder-1 pb-2 mb-3 d-flex align-items-center gap-2'>
                                <span>Basic Information</span>{!editBasicInformation && <button type='button' className='border-0 bg-transparent' onClick={toggleEditBasicInformation}><CreateOutlinedIcon className='text-danger' /></button>}
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='row justify-content-between mb-4'>
                                            <div className='col-5'>
                                                <label htmlFor='gender' className='form-label fw-bold'>Gender</label>
                                                <select name='gender' className='form-control' id='gender' value={userData?.gender || ''} onChange={handleInputChange}>
                                                    <option value=''>Select</option>
                                                    <option value='Male' >Male</option>
                                                    <option value='Female'>Female</option>
                                                    <option value='Other'>Other</option>
                                                </select>
                                            </div>
                                            {/* Encoutered a problem here on Date of Birth(fixed)  */}
                                            <div className='col-5'>
                                                <label htmlFor='date_of_birth' className='form-label fw-bold'>Birth Date</label>
                                                <input
                                                    type='date'
                                                    name='date_of_birth'
                                                    className='form-control'
                                                    id='date_of_birth'
                                                    value={userData.date_of_birth || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-end gap-2'>
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <button type='button' className='btn btn-secondary' onClick={toggleEditBasicInformation}>Cancel</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p className='fw-bold'>Full Name</p>
                                            {/* <p className='fw-bold'>Middle Name</p>
                                            <p className='fw-bold'>Last Name</p> */}
                                            <p className='fw-bold'>Gender</p>
                                            <p className='fw-bold'>Birth Date</p>
                                        </div>
                                        <div className='col-6'>
                                            <p> {userData?.first_name || '\u00A0'} <span>{" "}</span> {userData?.middle_name || '\u00A0'} <span>{" "}</span> {userData?.last_name || ' \u00A0'}</p>
                                            {/* <p> {userData?.middle_name || ''}</p>
                                            <p> {userData?.last_name || ''}</p> */}
                                            <p> {userData?.gender || '\u00A0'}</p>
                                            <p> {userData?.date_of_birth || '\u00A0'}</p>
                                        </div>
                                    </div>
                                </>
                            }
                        </section>

                        {/* Contact Information */}
                        <section className='container'>
                            <h4 className='border-bottom birder-1 pb-2 mb-3 d-flex align-items-center gap-2'>
                                <span>Contact Information</span>{!editContactInformation && <button type='button' className='border-0 bg-transparent' onClick={toggleContactInformation}><CreateOutlinedIcon className='text-danger' /></button>}
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
                                                    value={userData.email}
                                                    readOnly
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
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-end gap-2'>
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <button type='button' className='btn btn-secondary' onClick={toggleContactInformation}>Cancel</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p className='fw-bold'>Email </p>
                                            <p className='fw-bold'>Phone Number </p>
                                            <p className='fw-bold'>Address </p>
                                        </div>
                                        <div className='col-6'>
                                            <p> {userData?.email || '\u00A0'}</p>
                                            <p> {userData?.phone_number || '\u00A0'}</p>
                                            <p> {userData?.address || '\u00A0'}</p>
                                        </div>
                                    </div>
                                </>
                            }
                        </section>

                        {/* Background */}
                        <section className='container'>
                            <h4 className='border-bottom birder-1 pb-2 mb-3 d-flex align-items-center gap-2'>
                                <span>Background</span>{!editBackground && <button type='button' className='border-0 bg-transparent' onClick={toggleEditBackground}><CreateOutlinedIcon className='text-danger' /></button>}
                            </h4>

                            {editBackground && userData ?
                                <>
                                    <form onSubmit={newData}>
                                        <div className='row mb-4 justify-content-between'>
                                            <div className='col-5'>
                                                <label htmlFor='marital_status' className='form-label fw-bold'>Marital Status</label>
                                                <select name='marital_status' className='form-control' id='marital_status' value={userData?.marital_status || ''} onChange={handleInputChange}>
                                                    <option value=''>Select</option>
                                                    <option value='Single' >Single</option>
                                                    <option value='Married'>Married</option>
                                                    <option value='Divorced'>Divorced</option>
                                                    <option value='Widowed'>Widowed</option>
                                                </select>
                                            </div>
                                            {/*  */}
                                            <div className='col-5'>
                                                <label htmlFor='occupation' className='form-label fw-bold'>Occupation</label>
                                                <input
                                                    type='text'
                                                    name='occupation'
                                                    id='occupation'
                                                    className='form-control'
                                                    value={userData?.occupation || ''}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                        </div>
                                        <div className='d-flex justify-content-end gap-2'>
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <button type='button' className='btn btn-secondary' onClick={toggleEditBackground}>Cancel</button>
                                        </div>
                                    </form>
                                </>
                                :
                                <>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p className='fw-bold'>Marital Status </p>
                                            <p className='fw-bold'>Occupation </p>
                                        </div>
                                        <div className='col-6'>
                                            <p> {userData?.marital_status || '\u00A0'}</p>
                                            <p> {userData?.occupation || '\u00A0'}</p>
                                        </div>
                                    </div>
                                </>
                            }

                        </section>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Account;
