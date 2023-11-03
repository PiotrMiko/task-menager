import { useState } from "react";

export default function ComModal({
  joice,
  onUpdate,
  setCommentsModal,
  setEditModalActive,
}) {
  const MAX_LENGTH = 250;
  const [text, setText] = useState("");
  const [values, setValues] = useState("");
  const [reply, setReply] = useState("");
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);

  const inputValue = (e) => {
    setValues(e.target.value);
    if (e.target.value.length <= MAX_LENGTH) {
      setText(e.target.value);
    } else if (e.target.value.length >= MAX_LENGTH) {
      return;
    }
  };
  const addComment = () => {
    if (values.trim() !== "") {
      const updatedJoice = {
        ...joice,
        comments: [...joice.comments, { text: values, replies: [] }], // Updated structure
      };
      onUpdate(updatedJoice);
      setValues("");
    }
  };

  const addReply = () => {
    if (reply.trim() !== "" && activeReplyIndex !== null) {
      const updatedJoice = { ...joice };
      updatedJoice.comments[activeReplyIndex].replies.push(reply);
      onUpdate(updatedJoice);
      setReply("");
      setActiveReplyIndex(null);
    }
  };
  const handleReplyClick = (index) => {
    setActiveReplyIndex(index); // Set the active index when reply is clicked
  };
  const editModalActive = () => {
    setEditModalActive(true);
  };
  return (
    <>
      <div className="absolute inset-0 bg-[#F7F8FD]">
        {" "}
        <div className="btn-cont row flex w-full items-center justify-between pb-2 pl-4 pr-4 pt-2">
          {" "}
          <button
            className="row flex items-center justify-between gap-4 align-baseline"
            onClick={() => setCommentsModal(false)}
          >
            <svg
              width="6"
              height="11"
              viewBox="0 0 2 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Path 2"
                d="M4 9L0 5L4 1"
                stroke="#4661E6"
                strokeWidth="2"
              />
            </svg>
            <p className="text-xs font-bold text-[#647196]">Go back</p>
          </button>{" "}
          <button
            className="rounded-main bg-[#4661E6] pb-4 pl-4 pr-4 pt-4 text-sm font-bold text-[#FFFFFF]"
            onClick={editModalActive}
          >
            Edit Feedback
          </button>
        </div>
        {/*component task start*/}
        <div
          // key={item.id}
          className="m-4 flex flex-col items-start rounded-main 
       bg-white p-5"
          // onClick={() => handleTaskDisplay(item)}
        >
          <div className="text-md pb-4 font-bold">{joice.title}</div>{" "}
          <div className="text-md pb-4 font-normal">{joice.feedback}</div>{" "}
          <div className="text-transform: text-md mb-4 rounded-main bg-whiteGrey pb-2 pl-4 	pr-4 pt-2 font-semibold capitalize text-navyBlue">
            {joice.tag}
          </div>
          <div className="clickbar row text-transform: text-md flex w-full items-center justify-between rounded-main pb-2 pt-2 font-semibold capitalize">
            <div
              className="row flex items-center gap-4 rounded-main bg-whiteGrey pb-2 pl-4 pr-4 pt-2 align-baseline"
              // onClick={(e) => {
              //   e.stopPropagation(); // stop event propagation
              //   handleVoteCounter(e);
              // }}
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
              <div>{joice.votes}</div>
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
              <div>{joice.commentscount}</div>
            </div>
          </div>{" "}
        </div>
        {/*component task and*/}
        <div className="commentBox  m-4 rounded-main bg-white p-4">
          {" "}
          <span className="text-lg font-bold ">Comments</span>
          {joice.comments.map((comment, index) => (
            <div
              key={index}
              className="animate-fadeIn flex-col justify-between gap-8"
            >
              {" "}
              <div className="row mt-5 flex items-center justify-between ">
                <div className="profile">Post id: {joice.id}</div>
                <button
                  className="text-md font-semibold text-[#4661E6]"
                  onClick={() => handleReplyClick(index)}
                >
                  Reply
                </button>
              </div>
              <div className="text-md font-normal text-[#647196]">
                {" "}
                {/*text commenta*/}
                {comment.text}
              </div>{" "}
              {/* Updated to use object property */}{" "}
              {comment.replies &&
                comment.replies.map((reply, idx) => (
                  <div
                    key={idx}
                    className="text-md ml-4 pt-2 font-normal text-[#647196]"
                  >
                    {reply}
                  </div>
                ))}
              <div
                className={
                  activeReplyIndex === index
                    ? "row flex items-start justify-between gap-4 pt-4 align-top"
                    : "hidden"
                }
              >
                <textarea
                  className="h-20 w-full resize-none  rounded-main bg-whiteMedium p-4 focus:border-purple"
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />

                <button
                  className="w-40 rounded-main bg-purple p-2 pb-2 pl-4 pr-4 text-sm font-bold text-white"
                  onClick={addReply}
                >
                  Post reply
                </button>

                {/* Updated to call addReply */}
              </div>
            </div>
          ))}
        </div>
        <div className="commentInput m-4 rounded-main  bg-white p-4">
          <p className="text-lg  font-bold">Add Comment</p>
          <textarea
            type="textarea"
            className="h-24 w-full resize-none  rounded-main bg-whiteMedium p-4 focus:border-purple"
            value={values}
            onChange={inputValue}
            placeholder="Type your comments here"
          />
          <div className="row mt-2 flex items-center justify-between align-baseline">
            <span
              className="text-xs
font-normal text-[#647196]"
            >
              {MAX_LENGTH - text.length}
              {values.length >= MAX_LENGTH && (
                <span className="text-red-500">
                  {" "}
                  - Maximum character limit reached.
                </span>
              )}
              Characters left
            </span>{" "}
            <button
              className="rounded-main bg-purple pb-4 pl-4 pr-4 pt-4 text-xs font-bold text-white"
              onClick={addComment}
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
