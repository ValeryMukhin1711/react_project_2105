import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ImageWithText from './Components/ImageWithText/ImageWithText';
import Categories from './Components/Categories/Categories';
import Sale from './Components/Sale/Sale';
import AddressMap from './Components/AddressMap/AddressMap';

function App() {
  return (
    <div>
      <Header />
      
      <ImageWithText></ImageWithText>
      <Categories></Categories>
      
      <Sale/>
      <Footer />
      <AddressMap></AddressMap>

    </div>
  );
}

export default App;
