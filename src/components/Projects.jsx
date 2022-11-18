import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "../index.css";


const Projects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    
    <section id="projects" className="pt-40 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          These are some of the recent projects I have worked on by myself. I have also had a chance to collaborate with my fellow teammates to create apps which are also live here.
        </p>
      </motion.div>

      {/* //  PROJECTS  */}
       <div className="flex justify-center">

       {isAboveLarge ? (
         <Swiper
         slidesPerView={3}
         spaceBetween={30}
         slidesPerGroup={1}
         loop={true}
         loopFillGroupWithBlank={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Pagination, Navigation]}
         className="rounded-lg shadow-lg"
       >
 
         <SwiperSlide className="">
                   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                   <img class="rounded-t-lg" src="../assets/weather.png" alt=""/>
                   </a>
                   <div class="px-4 py-5 bg-white">
                   <h5 class="text-black text-xl font-medium mb-2">Weather Dashboard</h5>
                   <p class="text-stone-600 text-base mb-4">
                   This is a simple web application that allows users to see weather outlook of multiple cities. This was achieved by using Html, CSS, Javascript and OpenWeatherMap Api.
                   </p>
                   <a type="button" target="_blank" href="https://hassany99.github.io/weather-dashboard/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                   <a type="button" target="_blank" href="https://github.com/HassanY99/weather-dashboard" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                   
                   </div>
         </SwiperSlide>

         <SwiperSlide className="">
                   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                   <img class="rounded-t-lg" src="../assets/parking.png" alt=""/>
                   </a>
                   <div class="px-4 py-1 bg-white">
                   <h5 class="text-black text-xl font-medium mb-2">Parker App</h5>
                   <p class="text-stone-600 text-base mb-4">
                   This is a full-stack web application that helps users find free parking in the busiest of streets.
                   I developed this with 3 other team members using Javascript, Bootstrap, Nodejs, MySql and google location api was also used in order to create this web application.
                   </p>
                   <div className="my-3">
                   <a type="button" target="_blank" href="https://parker-live.herokuapp.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                   </div>
                   
                   </div>
         </SwiperSlide>

         <SwiperSlide className="ml-6">
                   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                   <img class="rounded-t-lg" src="../assets/pm.png" alt=""/>
                   </a>
                   <div class="px-4 py-5 bg-white">
                   <h5 class="text-black text-xl font-medium mb-2">Password Manager</h5>
                   <p class="text-stone-600 text-base mb-4">
                   This is a full-stack web application using Java Spring Boot, Angular and MySql which allows users to save all their passwords securely in one place.
                   I used Java Spring Boot, Spring Security, JWT, AES encryption, Angular and MySql in order to create this web application.
                   </p>
                   <a type="button" target="_blank" href="http://ngpasswordmanager.s3-website.us-east-2.amazonaws.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                   <a type="button" target="_blank" href="https://github.com/HassanY99/Password-Manager-App" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                   
                   </div>
         </SwiperSlide>
               
         <SwiperSlide className="">
                   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                   <img class="rounded-t-lg" src="../assets/fitness.png" alt=""/>
                   </a>
                   <div class="px-4 py-10 bg-white">
                   <h5 class="text-black text-xl font-medium mb-2">Fitness Tracker</h5>
                   <p class="text-stone-600 text-base mb-4">
                  This is a full-stack MERN web application where users can add excercises and see their activities.
                   I used React, Nodejs, Expressjs and mongoDB in order to create this web application.
                   </p>
                   <a type="button" target="_blank" href="https://mern-fitness-tracker-deploy.herokuapp.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                   <a type="button" target="_blank" href="https://github.com/HassanY99/MERN-Fitness-Tracker" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                   
                   </div>
         </SwiperSlide>
 

       </Swiper>
       ) : (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="rounded-lg shadow-lg "
      >
        <SwiperSlide className="">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="../assets/pm.png" alt=""/>
                  </a>
                  <div class="px-4 py-4 bg-white">
                  <h5 class="text-black text-xl font-medium mb-2">Password Manager</h5>
                  <p class="text-stone-600 text-base mb-4">
                  This is a full-stack web application using Java Spring Boot, Angular and MySql which allows users to save all their passwords securely in one place.
                  I used Java Spring Boot, Spring Security, JWT, AES encryption, Angular and MySql in order to create this web application.
                  </p>
                  <a type="button" target="_blank" href="http://ngpasswordmanager.s3-website.us-east-2.amazonaws.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                  <a type="button" target="_blank" href="https://github.com/HassanY99/Password-Manager-App" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                  
                  </div>
        </SwiperSlide>

        <SwiperSlide className="">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="../assets/fitness.png" alt=""/>
                  </a>
                  <div class="px-4 py-9 bg-white">
                  <h5 class="text-black text-xl font-medium mb-2">Fitness Tracker</h5>
                  <p class="text-stone-600 text-base mb-4">
                 This is a full-stack MERN web application where users can add excercises and see their activities.
                  I used React, Nodejs, Expressjs and mongoDB in order to create this web application.
                  </p>
                  <a type="button" target="_blank" href="https://mern-fitness-tracker-deploy.herokuapp.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                  <a type="button" target="_blank" href="https://github.com/HassanY99/MERN-Fitness-Tracker" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                  
                  </div>
        </SwiperSlide>

        <SwiperSlide className="">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="../assets/parking.png" alt=""/>
                  </a>
                  <div class="px-4 py-1 bg-white">
                  <h5 class="text-black text-xl font-medium mb-2">Parker App</h5>
                  <p class="text-stone-600 text-base mb-4">
                  This is a full-stack web application that helps users find free parking in the busiest of streets. 
                  I developed this with 3 other team members using Javascript, Bootstrap, Nodejs, MySql and google location api was also used in order to create this web application.
                  </p>
                  <a type="button" target="_blank" href="https://parker-live.herokuapp.com/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                  
                  </div>
        </SwiperSlide>

        <SwiperSlide className="">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="../assets/weather.png" alt=""/>
                  </a>
                  <div class="px-4 py-4 bg-white">
                  <h5 class="text-black text-xl font-medium mb-2">Weather Dashboard</h5>
                  <p class="text-stone-600 text-base mb-4">
                  This is a simple web application that allows users to see weather outlook of multiple cities. This was achieved by using Html, CSS, Javascript and OpenWeatherMap Api.
                  </p>
                  <a type="button" target="_blank" href="https://hassany99.github.io/weather-dashboard/" rel="noreferrer" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red hover:shadow-lg focus:bg-red focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Live App</a>
                  <a type="button" target="_blank" href="https://github.com/HassanY99/weather-dashboard" rel="noreferrer" class=" inline-block px-6 py-2.5  text-red font-medium text-xs leading-tight uppercase hover:text-turq  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Source Code</a>
                  
                  </div>
        </SwiperSlide>


      </Swiper>
       )}
          
         
       
      </div>
    </section> 
  );
};

export default Projects;




















// const Projects = () => {
//     return (
//       <section id="projects" className="flex flex-row py-40 ">
  
        //    <div class="p-4">
        //       <div class="rounded-lg shadow-lg bg-white max-w-sm">
        //           <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        //           <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
        //           </a>
        //           <div class="p-6">
        //           <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
        //           <p class="text-gray text-base mb-4">
        //               Some quick example text to build on the card title and make up the bulk of the card's
        //               content.
        //           </p>
        //           <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        //           </div>
        //       </div>
        //   </div>
  
          // <div class="p-4">
          //     <div class="rounded-lg shadow-lg bg-white max-w-sm">
          //         <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          //         <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
          //         </a>
          //         <div class="p-6">
          //         <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
          //         <p class="text-gray text-base mb-4">
          //             Some quick example text to build on the card title and make up the bulk of the card's
          //             content.
          //         </p>
          //         <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          //         </div>
          //     </div>
          // </div>
  
//           <div class="p-4">
//               <div class="rounded-lg shadow-lg bg-white max-w-sm">
//                   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
//                   <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
//                   </a>
//                   <div class="p-6">
//                   <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
//                   <p class="text-gray text-base mb-4">
//                       Some quick example text to build on the card title and make up the bulk of the card's
//                       content.
//                   </p>
//                   <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
//                   </div>
//               </div>
//           </div>
        
//       </section>
//     );
//   };
  
//   export default Projects;