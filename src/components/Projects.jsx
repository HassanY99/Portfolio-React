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

const Project = ( {title, description, image} ) => {
  const overlayStyles = `absolute h-22 w-50 opacity-80
    bg-black z-30 flex flex-col justify-center items-center text-center p-3 text-grey border-solid border-2 border-red rounded-2xl`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div  className="relative">
      <img src={`../assets/${image}.jpeg`} alt="project-1" />
      <br />
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-3 font-opensans">{description}</p>
      </div>
    </motion.div>
  );
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
          These are all my projects.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div className="p-2">
          <Project title="Password Manager" description="This is password manager app built to save all your passwords securely." image="project-1"/>
          </div>
          <div className="p-2">
          <Project title="Weather Dashboard" description="This is weather dashboard app built to save all your passwords securely." image="project-3"/>
          </div>
          <div className="p-2">
          <Project title="Password Generator" description="This is weather dashboard app built to save all your passwords securely." image="project-5"/>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;