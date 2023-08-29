import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import '../src/assets/aos/aos.js';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Description } from './components/Description';
import { Program } from './components/Program';
import { Ticket } from './components/Ticket';
import { Speaker } from './components/Speaker';
import { BecomePartner } from './components/BecomePartner';
import { Organizers } from './components/Organizers';
import { OurPartner } from './components/OurPartner';
import { MediaPartner } from './components/MediaPartner';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <NavBar />
      <Banner />
      <Description />
      <Program />
      <Speaker />
      <Ticket />
      <BecomePartner />
      <Organizers />
      <OurPartner />
      <MediaPartner />
      <Location />
      <Footer />
    </>
  )
}

export default App
