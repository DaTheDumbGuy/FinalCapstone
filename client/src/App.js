import React, { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'


function App() {
  // const [backendData, setBackendData] = useState([{}]);
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:1000/auth/api/insert', {
      movieName: movieName,
      movieReview: review,
    })
      .then(() => {
        alert('Success insert');
      })
      .catch((error) => {
        console.log(error);
        alert('Error inserting movie review');
      });
  };

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  return (
    <div>
      {/* {(typeof backendData.users === 'undefined') ?
        (<p>Loading...</p>
        ) : (
          backendData.users.map((users, i) => {
            return <p key={i}>{users}</p>;
          })
        )
      } */}
      <h1>CRUD Application</h1>
      <div className='form'>
        <label htmlFor='movieName'>Movie Name</label>
        <input type='text' name='movieName' id='movieName' onChange={(e) => {
          setMovieName(e.target.value);
        }} />
        <label htmlFor='review'>Review</label>
        <input type='text' name='review' id='review' onChange={(e) => {
          setReview(e.target.value);
        }} />
        <button onClick={submitReview}>Submit</button>
      </div>


    </div>
  )
}

export default App