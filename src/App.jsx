import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage"><Navbar /></section>
    <section id="Services"><a href="">Parallax</a></section>
    <section><a href="">Services</a></section>
    <section id="Portfolio"><a href="">Portfolio1</a></section>
    <section><a href="">Portfolio2</a></section>
    <section><a href="">Portfolio3</a></section>
    <section id="Contact"><Contact /></section>
  </div>;
};

export default App;
