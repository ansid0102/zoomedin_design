import logo from './logo.svg';
import './App.css';
import brand from './Zoomedin_BRAND.png'

function App() {
  return (
    <div className="App">
        <nav>
            <div id='brand_visual'>
            <img src={brand} height='300px'/>
            </div>
            
            <div id='brand_navigation'>
            <a>Logos</a>
            <a>Posters</a>
            <a>Typography</a>
            <a>Client Testimonials</a>
            </div>
        </nav>
        <div id='brand_enquiry' >
              <h3>Call: 9908310954</h3>
              <h3>Email: aneeshsiddhartha@gmail.com</h3>
        </div>
    </div>
  );
}

export default App;
