const SkillsIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7 grid grid-cols-4">
        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img alt="react" src="../assets/react.png" />
        </div>


        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-18 h-16 rounded-full" alt="javascript" src="../assets/javascript.png" />
        </div>


        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-18 h-16" alt="node" src="../assets/node.png" />
        </div>

        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-18 h-16" alt="html" src="../assets/html.png" />
        </div>

        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-18 h-16" alt="node" src="../assets/angular.png" />
        </div>

        {/* <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-18 h-18" alt="mysql" src="../assets/mysql.png" />
        </div> */}

        <div
          className="hover:opacity-50 transition duration-500"
        >
          <img className="w-12 h-14" alt="java" src="../assets/java.png" />
        </div>

      </div>

      
      
    );
  };
  
  export default SkillsIcons;