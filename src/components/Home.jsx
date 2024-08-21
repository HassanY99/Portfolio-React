import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../icons/SocialMediaIcons";
import Typewriter from "typewriter-effect";

const Home = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
      <section
        id="home"
        className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:left-[-2%] before:top-[-2%] before:rounded-full
              before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-baby-blue before:z-[-1]"
            >
              <img
                alt="profile"
                className="hover:filter hover:scale-90 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full "
                src="../assets/profile.png"
              />
            </div>
          ) : (
            <img
              alt="profile"
              className="z-10 w-full max-w-[250px] md:max-w-[250px]"
              src="../assets/profile.png"
            />

            
            
          )}
        </div>

        {/* MAIN TEXT */}
      <div className="z-30 basis-4/6 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveLarge ? (
          <p className="text-6xl text-dark-gray font-playfair z-10 text-center md:text-start">
          Hi! I'm <span className="text-light-gray">Hassan</span>
            <span
              className="xs:relative text-burg xs:font-semibold text-6xl z-20
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
                <Typewriter
  
                onInit={(typewriter)=> {

                typewriter
                
                .typeString(`Web Developer`)
                .deleteAll()
                .typeString("Frontend Developer")
                .deleteAll()
                .typeString("Backend Developer")
                .deleteAll()
                .typeString("Software Developer")
                .deleteAll()
                .typeString(`Web Developer`)
                .start();
                }}
                />
            </span>
          </p> ) : (

              <p className="text-5xl text-dark-gray font-playfair z-10 text-center md:text-start">
              Hi! I'm <span className="text-light-gray">Hassan</span>
                <span
                  className="xs:relative text-burg xs:font-semibold text-4xl z-20
                  before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                >
                    <Typewriter

                    onInit={(typewriter)=> {

                    typewriter
                    
                    .typeString(`Web Developer`)
                    .deleteAll()
                    .typeString("Frontend Developer")
                    .deleteAll()
                    .typeString("Backend Developer")
                    .deleteAll()
                    .typeString("Software Developer")
                    .deleteAll()
                    .typeString(`Web Developer`)
                    .start();
                    }}
                    />
                </span>
              </p>
          )}

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I am a Full-Stack Web Developer with enthusiasm and focus on building scalable applications. I am passionate about building reliable software, creating effective solutions and 
            learning new things everyday to grow professionally in my field.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            className="bg-gradient-to-r from-indigo-500 to-teal-500 hover:bg-gradient-colorful text-deep-blue rounded-sm py-3 px-7 font-semibold
             hover:text-white transition duration-500"
             target="_blank"
            href="https://drive.google.com/file/d/18O_Zr6dSs2YfgsjAzKNB4m7kq8ozBmoNWuMQ90oLceI/edit?usp=sharing" rel="noreferrer"
          >
            Resume
          </a>
          <AnchorLink
            className="rounded-r-sm bg-gradient-colorful py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-teal-500 transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        </div>
      </section>
  );
};

export default Home;