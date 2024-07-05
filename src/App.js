
import './App.css';
import CaraouselRender from './components/carousel/CarouselRender';
import Header from './components/header/Header';
import HeaderLower from './components/header/HeaderLower'

function App() {
  return (
    <div className="App">
     <Header/>
     <HeaderLower/>
     <CaraouselRender/>
    </div>
  );
}

export default App;
