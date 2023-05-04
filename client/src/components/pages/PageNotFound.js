import React from 'react'
import '../../styles/pages/PageNotFound.css';
function PageNotFound() {

    return (
        <div className='PageNotFoundContainer'>
            {/* <img src='https://cdn2.iconfinder.com/data/icons/contact-us-56/520/197_404_Error_Missing_Website-512.png' /> */}
            <h1 className='font-monospace'>PAGE NOT FOUND 404</h1>
            <div className="naldContainer">
                <img src='https://i0.wp.com/acegif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif' />
            </div>
            <div className='PNF-text'>The page you were looking for could not be found. it might have been removed, renamed, or din not exist in the first place.</div>
            <a href='/' className='underline'>Home</a>
        </div>
    )
}

export default PageNotFound