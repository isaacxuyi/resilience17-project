import Image from "next/image";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
