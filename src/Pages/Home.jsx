import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import foto1 from '../Assets/foto1.jpg';
import '../Pages/Home.css';
import Form from '../Components/Parts/Form';
import Footer from '../Components/Parts/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
            <div className='text'>
                <h2>Bine ați venit pe pagina mea!</h2>
                <p>
                Masajul este o tehnică terapeutică ce implică manipularea manuală a țesuturilor moi ale corpului, cum ar fi mușchii și pielea, pentru a îmbunătăți starea de sănătate și bunăstarea generală. Beneficiile masajului includ reducerea stresului, alinarea durerii, îmbunătățirea circulației și a flexibilității, precum și o mai bună calitate a somnului și stimularea sistemului imunitar.</p> <br />

                <a href='http://localhost:3000/services' className='menu2'>Afla mai multe</a> <br />

            </div>
            
            <div className='image'>
                <img src={foto1} alt="image" />
            </div>

            </div>
            <Form /> 

            <Footer />
        </>
    )
}

export default Home;
