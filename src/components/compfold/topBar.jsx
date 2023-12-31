import { useState, useEffect } from "react";

function Topbar({ onAddFeedbackClick, allTasks, update }) {
  const [displayedTasks, setDisplayedTasks] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    updateFilteredTasks();
  };
  useEffect(() => {
    updateFilteredTasks();
  }, [allTasks, selectedOption]); // Note: added allTasks

  const updateFilteredTasks = () => {
    let updatedTasks;

    if (selectedOption.trim() === "most upvotes") {
      updatedTasks = [...allTasks].sort((a, b) => b.votes - a.votes);
    } else if (selectedOption.trim() === "most comments") {
      updatedTasks = [...allTasks].sort(
        (a, b) => b.comments.length - a.comments.length,
      );
    } else {
      updatedTasks = allTasks;
    }

    setDisplayedTasks(updatedTasks);
    update(updatedTasks); // Propagate the changes to parent
  };

  return (
    <div className="topbar row over rounded-r-lg flex justify-between bg-darkgrey pb-2 pl-4 pr-4 pt-2">
      <div className="sort row flex items-center align-middle">
        <p className="text-xs font-normal text-white">Sort by:</p>
        <select
          className="bg-darkgrey text-xs font-bold text-white"
          id="sort"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="most upvotes">Most Upvotes</option>
          <option value="least updates">Least Updates</option>
          <option value="most comments">Most Comments</option>
          <option value="least comments">Least Comments</option>
        </select>
      </div>
      <button
        className="rounded-main bg-purple pb-4 pl-4 pr-4 pt-4 text-xs font-bold tracking-wide text-white"
        onClick={onAddFeedbackClick}
      >
        + Add Feedback
      </button>
    </div>
  );
}

export default Topbar;
