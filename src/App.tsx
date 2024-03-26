import "./App.css";
import Footer from "./components/footerDiv/Footer";
import Job from "./components/jobDiv/Job";
import Navbar from "./components/navBar/Navbar";
import Search from "./components/searchDiv/Search";
import Value from "./components/valueDiv/Value";

function App() {
    return (
        <div className="w-[85%] m-auto text-sm">
            <Navbar />
            <Search />
            <Job />
            <Value />
            <Footer />
        </div>
    );
}

export default App;
