import Navbar from "../Components/Navbar/Navbar";
import Footer from '../Components/Parts/Footer';
import "../Pages/Services.css";
import terapeutic1 from "../Assets/terapeutic1.jpg";
import terapeutic2 from "../Assets/terapeutic2.jpg";
import terapeutic3 from "../Assets/terapeutic3.jpg";
import Container from "react-bootstrap/esm/Container";

const DetaliiTerapeutic = () => {
  return (
    <>
      <Navbar />
      <h1 className="title">Importanța Masajului Terapeutic</h1>
      <div className="container-DT">
        <p className="grid-item-DT">
          Importanța Masajului Terapeutic pentru Sănătate și Bunăstare Într-o
          lume agitată și stresantă, menținerea unei stări de sănătate optime și
          a bunăstării generale devine tot mai dificilă. Un corp tensionat și
          stresat produce un nivel ridicat de cortizol, un hormon care are
          multiple efecte negative asupra organismului. Printre acestea se
          numără: Îngrășarea: Nivelurile ridicate de cortizol pot duce la
          creșterea în greutate, în special în zona abdominală.
        </p>
        <img src={terapeutic1} alt="image" className="grid-item-DT" />

        <p className="grid-item-DT">
          Insomnia: Cortizolul afectează ciclurile de somn, făcând mai dificilă
          adormirea și menținerea unui somn de calitate. Problemele digestive:
          Stresul și cortizolul pot cauza probleme digestive, inclusiv sindromul
          de colon iritabil și alte tulburări gastrointestinale. Durerile de
          cap: Stresul cronic și tensiunea pot duce la migrene și alte tipuri de
          dureri de cap. Beneficiile Masajului Terapeutic Masajul terapeutic
          este o soluție eficientă pentru a contracara efectele negative ale
          cortizolului și pentru a promova sănătatea generală. Prin reducerea
          nivelului de cortizol din organism, masajul permite corpului să intre
          într-o stare de recuperare și declanșează un sentiment durabil de
          relaxare și stare de bine.
        </p>
        <img src={terapeutic2} alt="image" className="grid-item-DT" />

        <p className="grid-item-DT">
          Concluzie Masajul terapeutic este o metodă puternică și eficientă de a
          combate efectele negative ale stresului și de a promova sănătatea și
          bunăstarea generală. Prin reducerea nivelului de cortizol, relaxarea
          mușchilor și creșterea flexibilității fizice, masajul contribuie
          semnificativ la îmbunătățirea calității vieții.
          <span>
            Vă invităm să experimentați beneficiile masajului terapeutic și să
            descoperiți cum acesta poate transforma starea de sănătate și
            bunăstarea generală.
          </span>
        </p>
        <img src={terapeutic3} alt="image" className="grid-item-DT" />
      </div>

      <Footer />
    </>
  );
};

export default DetaliiTerapeutic;
