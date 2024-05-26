// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import MessageContainer from "../../components/messages/MessageContainer";

// const Home = () => {
//   return <div className=" flex sm:h-[450px] md:h-[550px] bg-gray-400  rounded-lg overflow-hidden bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
//     <Sidebar />
//     <MessageContainer />
//   </div>;
// };

// export default Home;


import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row h-full overflow-auto sm:h-[450px] md:h-[550px] bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
