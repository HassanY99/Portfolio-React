import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div class="p-4">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                  <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray text-base mb-4">
                      Some quick example text to build on the card title and make up the bulk of the card's
                      content.
                  </p>
                  <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                  </div>
              </div>
          </div>

          <div class="p-4">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                  <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray text-base mb-4">
                      Some quick example text to build on the card title and make up the bulk of the card's
                      content.
                  </p>
                  <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                  </div>
              </div>
          </div>

          <div class="p-4">
              <div class="rounded-lg shadow-lg bg-white max-w-sm">
                  <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img class="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                  </a>
                  <div class="p-6">
                  <h5 class="text-gray text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray text-base mb-4">
                      Some quick example text to build on the card title and make up the bulk of the card's
                      content.
                  </p>
                  <button type="button" class=" inline-block px-6 py-2.5 bg-turq text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                  </div>
              </div>
          </div>
          
        </motion.div>
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