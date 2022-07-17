import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="mx-auto">An innovative way to economically incentivise environment regeneration</div>
      <div className="mx-auto">Raise money using NFTs</div>
      <div className="mx-auto">NFT holders earn passive incomes for a lifetime(or generations)</div>
      
      
    </div>
  );
}
