import { useState, useEffect, useRef } from "react";
import TasksDispley from "./tasksDisplay";

export default function RoadMapModal({ allTasks, setRoadModal, handleCounts }) {
  const [planned, setPlanned] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [live, setLive] = useState([]);
  const [activeButton, setActiveButton] = useState("planned");
  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    filterByStatus();
    filterItem();
  }, [activeButton]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    filterByStatus(buttonId);
  };

  const filterByStatus = () => {
    const completeTasks = allTasks.filter(
      (item) => item.status === activeButton
    );
    setDisplayedTasks(completeTasks);
  };

  const containerRef = useRef(null);
  const [divCount, setDivCount] = useState(0);

  const filterItem = () => {
    const planned = [];
    const inProgress = [];
    const live = [];

    allTasks.forEach((item) => {
      switch (item.status) {
        case "planned":
          planned.push(item);
          break;
        case "inProgress":
          inProgress.push(item);
          break;
        case "live":
          live.push(item);
          break;
        default:
          break;
      }
    });

    setPlanned(planned);
    setInProgress(inProgress);
    setLive(live);
  };

  useEffect(() => {
    if (containerRef.current) {
      const count = containerRef.current.querySelectorAll("div").length;
      setDivCount(count - 3);
    }
    handleCounts(planned.length, inProgress.length, live.length);
  }, [planned, inProgress, live]);

  return (
    <div className="absolute inset-0 w-full h-full p-5 bg-white">
      <button onClick={() => setRoadModal(false)}>close</button>
      <div className="topbar flex row justify-between w-full h-10 text-white bg-[#373F68]">
        <h1>Roadmap</h1>
        <button>Add Feedback</button>
      </div>{" "}
      <div className="status-btn flex items-center  justify-between p-5 text-xs font-bold  text-[#3A4374] gap-6">
        <button
          className={activeButton === "planned" ? "text-[#000000]" : null}
          onClick={() => handleButtonClick("planned")}
        >
          Planned
        </button>
        <button
          className={activeButton === "inProgress" ? "text-[#000000]" : null}
          onClick={() => handleButtonClick("inProgress")}
        >
          In-Progress
        </button>
        <button
          className={activeButton === "live" ? "text-[#000000]" : null}
          onClick={() => handleButtonClick("live")}
        >
          Live
        </button>
      </div>
      <div
        className="cols flex flex-col row justify-between"
        ref={containerRef}
      >
        <TasksDispley displayedTasks={displayedTasks} />
      </div>{" "}
    </div>
  );
}
