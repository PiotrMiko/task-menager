export default function TasksDispley({
  displayedTasks,
  handleTaskDisplay,
  onVoteUpdate,
}) {
  const handleVoteCounter = (id) => {
    const updatedTasks = displayedTasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          votes: task.votes + 1,
        };
      }
      return task;
    });
    onVoteUpdate(updatedTasks);
  };

  return (
    <>
      <div>
        {displayedTasks.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start m-4 p-5 bg-white rounded-main "
            onClick={() => handleTaskDisplay(item)}
          >
            <div className="text-md font-bold pb-4">{item.title}</div>{" "}
            <div className="text-md font-normal pb-4">{item.feedback}</div>{" "}
            <div className="pt-2 mb-4 pr-4 pb-2 pl-4 rounded-main bg-whiteGrey 	text-transform: capitalize text-md font-semibold text-navyBlue">
              {item.tag}
            </div>
            <div className="clickbar flex row  justify-between items-center w-full pt-2  pb-2  rounded-main text-transform: capitalize text-md font-semibold">
              <div
                className="flex row pt-2 pr-4 pb-2 pl-4 align-baseline items-center gap-4 bg-whiteGrey rounded-main"
                onClick={(e) => {
                  e.stopPropagation(); // stop event propagation
                  handleVoteCounter(item.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                >
                  <path
                    id="Path 2"
                    d="M0 6L4 2L8 6"
                    stroke="#4661E6"
                    strokeWidth="2"
                  />
                </svg>
                <div>{item.votes}</div>
              </div>{" "}
              <div className="">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Path"
                    d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                    fill="#CDD2EE"
                  />
                </svg>
                <div>{item.commentscount}</div>
              </div>
            </div>{" "}
          </div>
        ))}
      </div>
    </>
  );
}
