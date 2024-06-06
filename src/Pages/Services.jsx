import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Parts/Footer';
import Form from '../Components/Parts/Form';
import terapeutic from '../Assets/terapeutic.jpg';
import miere from '../Assets/miere.jpg';
import foto8 from '../Assets/foto8.jpg';
import pietre1 from '../Assets/pietre1.jpg';
import '../Pages/Services.css';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className='container1'>

        <div className='text3'>
          <img src={terapeutic} alt="image" className='terapeutic' />
          <div className='div'>
          <h3>MASAJ TERAPEUTIC</h3>
          <a href='http://localhost:3000/DetaliiTerapeutic' className='a3'>DETALII</a>
          </div>
        </div>

        <div className='text3'>
          <img src={miere} alt="image" className='miere' />
          <div className='div'>
          <h3>MASAJ CU MIERE</h3>
          <a href='http://localhost:3000/DetaliiMiere' className='a3'>DETALII</a>
        </div>
        </div>

        <div className='text3'>
          <img src={foto8} alt="image" className='foto8' />
          <div className='div'>
          <h3>MASAJ ANTICELULITIC</h3>
          <a href='http://localhost:3000/DetaliiAnticelulitic' className='a3'>DETALII</a>
        </div>
        </div>

        <div className='text3'>
          <img src={pietre1} alt="image" className='pietre1' />
          <div className='div'>
          <h3>MASAJ DE RELAXARE</h3>
          <a href='http://localhost:3000/DetaliiRelaxare' className='a3'>DETALII</a>
        </div>
        </div>



      </div>
      <Form />
      <Footer />
    </>
  )
}

export default Services;
