


import { Poppins } from "next/font/google";
const font= Poppins({ subsets: ["latin"] ,weight:["100","200","300","400","600","700","800","900"] });



import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import style from "./style.module.css"


export default function RootLayout({children}) {
  return (
    
        <>
      <Navbar/>
      <section className={style.home} >
      {children}
      </section>
        <Footer/>
        </> 
      
  );
}
