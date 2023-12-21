import Heading from './components/Heading';
import NavBar from './components/NavBar';
import SubHeading from './components/SubHeading';
import Gallery from './components/Gallery';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="w-full">
            <NavBar/>
            <Heading/>
            <SubHeading/>
            <Gallery/>
            <FaqSection/>
            <Footer/>
        </div>
    );
}

export default App;
