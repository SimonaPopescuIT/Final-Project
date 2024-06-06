import React from 'react'
import ReactPlayer from 'react-player';
import '../Pages/Home.css';
import Navbar from '../Components/Navbar/Navbar';
import Form from '../Components/Parts/Form';
import Footer from '../Components/Parts/Footer';

const Despre = () => {
    return (<>
                    <Navbar />

        <div className='container5'>
            <h4>Misiunea mea</h4> 

            Misiunea mea este să ofer o experiență de masaj unică și personalizată, adaptată nevoilor și preferințelor individuale ale fiecărui client. <br />
            În permanență în căutare de noi cunoștințe și tehnici, mă asigur că sunt mereu la curent cu cele mai recente dezvoltări din domeniu pentru a oferi tratamente de cea mai înaltă calitate. <br /> <br />

            <b>Valorile mele</b> <br /> <br />
            Valorile mele, precum atenția la detalii, profesionalismul și empatia față de fiecare client, mă ghidează în fiecare sesiune de masaj.<br />
            Scopul meu este să creez un mediu sigur, relaxant și reconfortant, în care fiecare persoană se poate simți valorizată și îngrijită.<br />

            Te invit să experimentezi puterea vindecătoare a masajului și să te bucuri de o experiență de răsfăț și relaxare. <br /> <br />
            Vino să te conectezi cu propria ta stare de bine și să îți redescoperi echilibrul la fiecare ședință.<br />

            <h4>Abia aștept să te întâlnesc și să te ajut să te simți în deplină armonie cu tine însuți! </h4> <br />

            <ReactPlayer
                url="https://www.youtube.com/watch?v=7tJRTQ3gojU&ab_channel=MaseurSimonaPopescu"
                width="600px"
                height="400px"
                controls
            />
        </div>

<Form /> 

<Footer />
</>
    )
}

export default Despre;
