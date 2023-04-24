import React from 'react'
import '../../styles/common/Footer.css'
function Footer() {
    return (
        <div>
            <footer>
                <div>
                    <h4>Contact</h4>
                    <p><i className='bx bxs-phone'></i> (083) 552 2121</p>
                    <p><i className='bx bxs-envelope' ></i> lifehome55@yahoo.com</p>
                    <p><i className='bx bxs-map' ></i> Life Compound, Guinto Street Extension,
                        Brgy. San Isidro, General Santos City, Philippines</p>
                </div>
                <div>
                    <h2>LifeHome Mindanao</h2>
                    <p>A non-profit organization dedicated for orphaned children.</p>
                    <ul className='social_links'>
                        <li><a href='#'><i className='bx bxl-facebook-square' ></i></a></li>
                        <li><a href="#"><i className='bx bxl-gmail' ></i></a></li>
                        <li><a href="#"><i className='bx bxl-linkedin-square' ></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer