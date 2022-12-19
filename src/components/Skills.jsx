import LineGradient from "./LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import SkillsIcons from "../icons/SkillsIcons";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-8 pb-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 w-400">
            I am self-driven Web Developer with knowledge in both client and server-side development. I am experienced in building backend API's to working with databases and also capable of creating dynamic websites and web applications.
             I have the most experience with Java and Javascript. Through various projects, I have gained an in-depth understanding of multiple web frameworks 
             including Spring Boot, Spring Security, React, Angular, Express and many others which I also use daily in my current position. I have strong foundations in programming concepts including data structures, algorithms, 
             and object oriented design.
          </p>

          <p className="font-playfair font-semibold text-4xl mb-1">
            Tech <span className="text-blue">Stack</span>
          </p>
          <div>_______________________</div>
          <p className="mt-5 mb-2 w-400">
            <span className="text-yellow">Frontend</span> - HTML5, CSS3, JavaScript, ReactJS, AngularJS, jQuery, Bootstrap, Tailwind, Handelbars.js and JSP.
            </p>
            <LineGradient width="w-1/3 ml-20" />
            <p className="mt-2 mb-2 w-400">
            <span className="text-green-600">Backend</span> - Java, Spring Boot, Spring MVC, Spring Security, JPA, NodeJs, Express, MySQL, MongoDB and RESTful API
            </p>
            <LineGradient width="w-1/3 ml-20" />
            <p className="mt-2 mb-2 w-400">
            <span className="text-orange-800">Tools</span> - Git, GitHub, Jenkins, CI/CD, Postman, Heroku, AWS, Node Package Manager and JIRA.
            </p>


        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div>
                 <motion.div
          className="flex mt-5 justify-center md:justify-start grid-col-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <SkillsIcons />
        </motion.div>
            </div>
          ) : (
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
            <SkillsIcons />
        </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MySkills;