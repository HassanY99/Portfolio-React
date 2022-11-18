import { useState } from "react";
import {FaArrowUp} from 'react-icons/fa';

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
        
        <div className="flex justify-center">
        <button >
            <FaArrowUp className="h-42 w-40 hover:scale-90" onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
        </button>
        </div>

      <div className="flex justify-center">
      <div className="flex justify-center md:justify-start my-10 gap-16">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
      </div>

        {/* <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Hassan Yusuf
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 Yusuf. All Rights Reserved.
          </p>
        </div> */}
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