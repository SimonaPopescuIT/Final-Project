import React from 'react';
import '../../Pages/Home.css';

const Form = () => {
    return (
    <>
            <h3 className='h3'>Doriti sa faceti o rezervare?</h3>
            <p className='h3'>
            Suntem nerăbdători să te întâmpinăm la salonul nostru de înfrumusețare din Iași! Accesează pagina de Rezervări şi completează formularul cu detaliile de contact și ora preferată pentru programare, iar echipa noastră va confirma disponibilitatea în cel mai scurt timp posibil. Te așteptăm cu drag!
            <br/>
            <br/>
            <button className='button'><a href='http://localhost:3000/reservation' className='a'>Reservation</a></button>
            </p>
                </>

    )
}

export default Form;
