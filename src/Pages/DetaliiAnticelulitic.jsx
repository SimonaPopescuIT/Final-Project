import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Parts/Footer';
import Form from '../Components/Parts/Form';
import "../Pages/Services.css";
import ReactPlayer from 'react-player';


const DetaliiAnticelulitic = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='text3'>
          <h1 className='title'>Scapă de Celulită cu Masajul Anticelulitic!</h1>

          <p>
            Dacă sunteți în căutarea unei soluții eficiente și plăcute pentru a combate celulita, masajul anticelulitic este exact ceea ce aveți nevoie. Această tehnică specializată ajută la descompunerea depozitelor de grăsime și la îmbunătățirea aspectului pielii, oferindu-vă o piele mai fermă și mai sănătoasă.

          </p>
          <h3>Beneficiile Masajului Anticelulitic</h3>
          Reducerea Celulitei:
          <ol>
            <li>Masajul anticelulitic ajută la descompunerea grăsimilor subcutanate și la uniformizarea aspectului pielii, reducând vizibilitatea celulitei.</li> 

            <li> Îmbunătățirea Aspectului Pielii:
            Această tehnică stimulează producția de colagen și elastină, esențiale pentru o piele tonifiată și elastică. </li>

            <li> Drenaj Limfatic:
            Masajul include tehnici de drenaj limfatic, care ajută la eliminarea toxinelor din organism și la îmbunătățirea circulației limfatice. Veți simți o senzație de lejeritate și de bunăstare generală.
            </li>
          </ol>

          <h3>Concluzie</h3>
          <p>Masajul anticelulitic este o soluție eficientă și plăcută pentru combaterea celulitei. Prin tehnici specializate, acest masaj ajută la reducerea stratului de celulită, îmbunătățește fermitatea și aspectul pielii și stimulează drenajul limfatic. În combinație cu un stil de viață sănătos, masajul anticelulitic poate oferi rezultate remarcabile, contribuind la o piele mai fermă și la un organism detoxifiat.</p>


        </div>
      </div>

      <ReactPlayer
        className='video1'
        url="https://www.facebook.com/108592311656929/videos/603467640901845"
        width="600px"
        height="400px"
        controls
      />




      <Form />
      <Footer />
    </>
  )
}

export default DetaliiAnticelulitic;
