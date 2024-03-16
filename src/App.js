import logo from './logo.svg';
import image1 from './image1.jpg'; // Import the first image
import image2 from './image2.jpg'; // Import the second image
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Do these images represent the same specie?</p>

        {/* Display images side by side */}
        <div className="image-container">
          <img src={image1} className="App-image" alt="Image 1" />
          <img src={image2} className="App-image" alt="Image 2" />
        </div>
        <div className="button-container">
          <button className="btn">Yes</button>
          <button className="btn">No</button>
          <button className="btn">Cannot tell</button>
        </div>
      </header>
    </div>
    
    
  );
}

export default App;
