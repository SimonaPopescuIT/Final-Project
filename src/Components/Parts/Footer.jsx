import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../Pages/Home.css';
import { MdOutlineSpa } from 'react-icons/md';

const Footer = () => {
    return (
        <>
                    {/* <hr/> */}

            <table className='table1'>
                <thead className='thead'>
                    <tr className='tr'>
                        <th className='logo2'>
                        <a href="http://localhost:3000/" className='logo'>
                    MASEUR  <MdOutlineSpa className="navbar-icon" />  SIMONA
                </a> <br/><br/>
                        <a href="https://www.facebook.com/profile.php?id=100076203728620" target="_blank" rel="noopener noreferrer" className="facebook-link">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                        </th>

                        <th className='th'>
                        <a href='http://localhost:3000/' className='menu1'>Home</a> <br />
                    <a href='http://localhost:3000/about' className='menu1'>About</a>  <br />
                    <a href='http://localhost:3000/services' className='menu1'>Services</a>  <br />
                    <a href='http://localhost:3000/reservation' className='menu1'>Reservation</a>
                        </th>

                        <th className='program1'>
                        <h3>PROGRAM & CONTACT</h3>
                    <p>
                        Monday Friday - 10.00 - 21.00 <br />
                        Saturday 09.00 - 15.00</p>
                    <p>0735963478</p>

                        </th>
                    </tr>
                </thead>

            </table>
        </>

    )
}

export default Footer;