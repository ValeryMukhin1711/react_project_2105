import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ImageWithText from './Components/ImageWithText/ImageWithText';
import Categories from './Components/Categories/Categories';
import Sale from './Components/Sale/Sale';
import AddressMap from './Components/AddressMap/AddressMap';
import FirstOrder from './Components/FirstOrder/FirstOrder';

function App() {
  return (
    <div>
      <Header />
      
      <ImageWithText></ImageWithText>
      <Categories></Categories>
      <FirstOrder></FirstOrder>
      
      <Sale/>
      <Footer />
      <AddressMap></AddressMap>

    </div>
  );
}

export default App;
