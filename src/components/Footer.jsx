import { useState } from "react";
import {FaChevronUp} from 'react-icons/fa';
import { motion } from "framer-motion";

const Footer = () => {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);


  return (
    <footer className="h-64 bg-turq pt-10">
        
        <motion.div
          initial={{ x: 0 }}
          
          animate={{ y: [12, 17, 12, 17, 12, 17, 12, 17, 12, 17, 12, 17, 12, 17, 12, 17, 12, 17, 12, 17] }}
          transition={{
            type: "spring",
            repeat: 5,
            repeatType: "reverse",
            duration: "10",
            delay: "1"
          }}
          
        >
        <div className="flex justify-center">
        <button >
            <FaChevronUp className="hover:scale-90" onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </button>
        </div>
        </motion.div>

      <div className="flex justify-center pt-5">
      <div className="flex justify-center md:justify-start my-10 gap-16">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/hassan-yusuf-35a928214/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/HassanY99"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/hassanyx"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>
      
      </div>
      <div className="flex justify-center">
            _________________________________________________________________________________
        </div>
        <div className="flex justify-center font-sans">
                © 2022 - Hassan Yusuf
        </div>
    </footer>
  );
};

export default Footer;