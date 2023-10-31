import { useState, useEffect } from "react";

function RoadMapCounts({ allTasks, openRoadModal }) {
  const [roadMapCounts, setRoadMapCounts] = useState({});
  const countStatus = () => {
    let plannedCount = 0;
    let inProgressCount = 0;
    let liveCount = 0;

    allTasks.forEach((task) => {
      switch (task.status) {
        case "planned":
          plannedCount++;
          break;
        case "inProgress":
          inProgressCount++;
          break;
        case "live":
          liveCount++;
          break;
        default:
          break;
      }
    });

    setRoadMapCounts({ plannedCount, inProgressCount, liveCount });
  };

  useEffect(() => {
    countStatus();
  }, [allTasks]);

  return (
    <>
      {" "}
      <h1 className="Roadmap text-lg font-bold pb-6">Roadmap</h1>
      <div
        className="cursor-pointer text-xs font-semibold underline text-[#4661E6]"
        onClick={() => openRoadModal(!false)}
      >
        View
      </div>
      <ul>
        <li className=" text-[#647196] flex row justify-between  pb-2">
          <a href="">Planned:</a>
          <span className=" text-base font-bold">
            {roadMapCounts.plannedCount}
          </span>
        </li>
        <li className=" text-[#647196] flex row justify-between pb-2">
          <a href=""> inProgress:</a>{" "}
          <span className=" text-base font-bold">
            {roadMapCounts.inProgressCount}
          </span>
        </li>
        <li className=" text-[#647196] flex row justify-between pb-2">
          <a href=""> Live:</a>
          <span className=" text-base font-bold">
            {" "}
            {roadMapCounts.liveCount}
          </span>
        </li>
      </ul>
    </>
  );
}

export default RoadMapCounts;
