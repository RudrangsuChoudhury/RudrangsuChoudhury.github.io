import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './index.css';
const App= () => {
    return(
        <div className="App">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}
export default App;
