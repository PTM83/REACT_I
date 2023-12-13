import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

{/*Import Bootstrap*/}
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Badge from 'react-bootstrap/Badge'

function App() {

  const infoCard = [
    {image:"https://placekitten.com/g/200/300",
    title:'Bola de Nieve',
    colorButton:'success',
    textButton:"Adoptar",
    textCard:'Adorable gatito alegre y lleno de vida'},
  {image:"https://placekitten.com/g/200/300",
    title:'Bola de Nieve 2',
    colorButton:'primary',
    textButton:"Adoptar",
    textCard:'Siete vidas no serán suficiente para no amarlo'},
  {image:"https://placekitten.com/g/200/300",
    title:'Coltrane',
    colorButton:'warning',
    textButton:"Adoptar",
    textCard:'Dulce locura de gato cariñoso e independiente'}
  ];

  return (
    <>
        <header>
            <Header titleHeader = 'Adopta un Gatito'/>
        </header>


        <section className='classCard'>
            {infoCard.map( (element, index) => (<MyCard image={element.image}
            title = {element.title}
            textCard = {element.textCard}
            colorButton = {element.colorButton}
            textButton = {element.textButton}
            key = {index}
            />)
            )}
        </section>



        <Footer/>

    </>
  )
}

export default App
