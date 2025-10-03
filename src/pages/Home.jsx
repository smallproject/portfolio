// import Hero from '../components/Hero';
// import Footer from '../components/Footer';

import {Link} from "react-router-dom";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Teaser from "../components/Teaser.jsx";
import Contact from "../components/Contact.jsx";

function Home () {
    return (
        <div className="container py-5">
            {/* Hero Section */}
            <Hero/>

            {/* Skills Section */}
            <Skills/>

            {/* Portfolio Preview */}
            <Portfolio/>

            {/* About Teaser */}
            <Teaser/>


            {/* Contact CTA */}
            <Contact/>

        </div>
    );
}

export default Home;
