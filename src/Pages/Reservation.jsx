import Navbar from '../Components/Navbar/Navbar';
// import Form from '../Components/Parts/Form';
import Footer from '../Components/Parts/Footer';
import '../Pages/Reservation.css';

const Reservations = () => {
  return (
    <>
      <Navbar />

      <div className='form-container'>
      <form className='form-section'>
        <div className='form-input'> 
        <input type='text' className='FullName' placeholder='FULL NAME'/>
        <input type='text' placeholder='SUBJECT:' className='Subject'/>
        </div>

        <div className='form-input'> 
        <input type='email' placeholder='EMAIL' className='EMAIL'/>
        <input type='number' placeholder='TELEPHONE' className='TELEPHONE'/>
        </div>

        <div className='form-input'> 
        <input type='text' placeholder='DESIRED SERVICES' className='DESIREDSERVICES'/>
        </div>

        <div className='form-input'> 
        <input type='date' placeholder='DATE' className='DATE'/>
        
        <input type='time' placeholder='TIME' className='TIME'/>
        </div>

        <div className='form-input'> 
        <input type='text' placeholder='MESSAGE' className='MASSAGE'/>
        </div>
        <button className='button1'>Send message</button>
      </form>
      </div>


      {/* <Form /> */}
      <Footer />
    </>
  )
}

export default Reservations;
