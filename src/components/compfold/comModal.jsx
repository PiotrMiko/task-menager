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
        <div className="btn-cont flex row items-center justify-between pt-2 pr-4 pb-2 pl-4 w-full">
          {" "}
          <button
            className="flex row justify-between align-baseline items-center gap-4"
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
            className="bg-[#4661E6] rounded-main text-sm font-bold text-[#FFFFFF] pl-4 pr-4 pt-4 pb-4"
            onClick={editModalActive}
          >
            Edit Feedback
          </button>
        </div>
        {/*component task start*/}
        <div
          // key={item.id}
          className="flex flex-col items-start m-4 p-5 
       bg-white rounded-main"
          // onClick={() => handleTaskDisplay(item)}
        >
          <div className="text-md font-bold pb-4">{joice.title}</div>{" "}
          <div className="text-md font-normal pb-4">{joice.feedback}</div>{" "}
          <div className="pt-2 mb-4 pr-4 pb-2 pl-4 rounded-main bg-whiteGrey 	text-transform: capitalize text-md font-semibold text-navyBlue">
            {joice.tag}
          </div>
          <div className="clickbar flex row  justify-between items-center w-full pt-2  pb-2  rounded-main text-transform: capitalize text-md font-semibold">
            <div
              className="flex row pt-2 pr-4 pb-2 pl-4 align-baseline items-center gap-4 bg-whiteGrey rounded-main"
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
        <div className="commentBox  m-4 p-4 bg-white rounded-main">
          {" "}
          <span className="text-lg font-bold ">Comments</span>
          {joice.comments.map((comment, index) => (
            <div
              key={index}
              className="flex-col justify-between gap-8 animate-fadeIn"
            >
              {" "}
              <div className="flex row justify-between items-center mt-5 ">
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
                    className="ml-4 pt-2 text-md font-normal text-[#647196]"
                  >
                    {reply}
                  </div>
                ))}
              <div
                className={
                  activeReplyIndex === index
                    ? "flex row justify-between items-start align-top pt-4 gap-4"
                    : "hidden"
                }
              >
                <textarea
                  className="w-full h-20 bg-whiteMedium  rounded-main resize-none p-4 focus:border-purple"
                  type="text"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />

                <button
                  className="text-sm font-bold pl-4 p-2 pr-4 pb-2 w-40 bg-purple text-white rounded-main"
                  onClick={addReply}
                >
                  Post reply
                </button>

                {/* Updated to call addReply */}
              </div>
            </div>
          ))}
        </div>
        <div className="commentInput m-4 p-4  bg-white rounded-main">
          <p className="text-lg  font-bold">Add Comment</p>
          <textarea
            type="textarea"
            className="w-full h-24 bg-whiteMedium  rounded-main resize-none p-4 focus:border-purple"
            value={values}
            onChange={inputValue}
            placeholder="Type your comments here"
          />
          <div className="flex row justify-between align-baseline items-center mt-2">
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
              className="bg-purple rounded-main text-xs font-bold text-white pl-4 pr-4 pt-4 pb-4"
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
