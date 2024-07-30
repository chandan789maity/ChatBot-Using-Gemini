import { useState, useRef } from "react";
import TopNavbar from "../../components/Navbar/components/TopNavbar";
import Sidebar from "../../components/Navbar/components/Slidebar";
import Content from "./components/Content";
const ChatPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="bg-sky-50 dark:bg-[#0b1437]">
      <TopNavbar toggleSidebar={toggleSidebar} />
      <Sidebar
        ref={sidebarRef}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
      <div
        className={`p-4 transition-all duration-300 h-auto min-h-screen ${
          isSidebarOpen ? "sm:ml-64 ml-72" : "sm:ml-0"
        }`}
      >
        <div className="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 min-h-screen">
          {/* Main content */}
          <Content />
          
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
