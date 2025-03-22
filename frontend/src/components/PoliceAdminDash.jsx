import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FolderClose from "./FolderClose";
import { Vortex } from "../components/ui/vortex";

const PoliceAdminDash = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Correct function declaration
  const handleCrime = () => {
    navigate("/crimePage");
  };

  const handleVictims = () => {
    navigate("/victimsPage");
  };

  const handleDepartments = () => {
    navigate("/departmentsPage");
  };

  const handleLocations = () => {
    navigate("/locationsPage");
  };

  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center justify-center px-4 md:px-10 w-full h-screen"
    >
      <main className="container h-full px-1">
        {/* Responsive Grid */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          {/* Wrap Folder & Label inside div with onClick */}
          <div 
            className="flex h-30 w-30 flex-col items-center m-2 md:items-start cursor-pointer"// Now click on label OR folder works
            onClick={handleCrime}
          >
            <FolderClose/>
            <label className="font-bold text-white text-center w-full">
              Crime
            </label>
          </div>

          <div className="flex h-30 w-30 flex-col items-center m-2 cursor-pointer md:items-start" onClick={handleVictims}>
            <FolderClose />
            <label className="font-bold text-white text-center w-full">
              Victims
            </label>
          </div>

          <div className="flex h-30 w-30 flex-col items-center m-2 cursor-pointer md:items-start" onClick={handleDepartments}>
            <FolderClose />
            <label className="font-bold w-full text-white text-center">
              Departments
            </label>
          </div>

          <div className="flex h-30 w-30 flex-col items-center m-2 cursor-pointer md:items-start" onClick={handleLocations}>
            <FolderClose />
            <label className="font-bold text-white text-center w-full">
              Locations
            </label>
          </div>
        </div>
      </main>

      <footer className="h-14 flex justify-center items-center bg-black/70 fixed bottom-0 w-full text-white">
        <div className="text-sm font-semibold">{time}</div>
      </footer>
    </Vortex>
  );
};

export default PoliceAdminDash;
