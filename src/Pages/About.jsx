import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Parts/Footer';
import relaxare1 from '../Assets/relaxare1.jpg';
import Form from '../Components/Parts/Form';
import '../Pages/About.css';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='text'>
            <h1 >Maseur Simona Popescu</h1>
          <b> Despre mine</b> <br /> <br />
          Sunt Simona Popescu, un Maseur dedicat cu o pasiune arzătoare pentru terapia prin masaj.<br />
          Experiența mea vastă și devotamentul față de starea de bine a fiecărui client mă definesc în această industrie. <br />
          În calitate de terapeut, am avut privilegiul să lucrez cu o gamă variată de persoane, ajutându-le să-și recapete echilibrul mental și fizic prin tehnici terapeutice avansate și abordări personalizate.<br /> <br />
          <a href='http://localhost:3000/Despre' className='menu2'>Afla mai multe</a> <br />

        </div>
        <div className='image'>
          <img src={relaxare1} alt="image" />
        </div>
        </div>



      <Form />
      <Footer />
    </>
  )
}

export default About;
