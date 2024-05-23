import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SearchCard from "./components/SearchCard";
import MeetTeams from "./components/MeetTeams";
import Curosal from "./components/Curosal";
import HeaderSection from "./components/HeaderSection";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSection />
      <Section1 />
      <Section2 />
      <SearchCard />
      <MeetTeams />
      <Curosal />
      <Logo />
      <Home />
      <Form />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
