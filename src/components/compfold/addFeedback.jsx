import { useState } from "react";
/// tuaj mozna dodaac pokazywanie na all lub zrobic przekierowanie do dfilter ux ui itd...
export default function Modal({
  activeModal,
  setActiveModal,
  sendDataToParent,
  toggleModals,
}) {
  const [inputData, setInputData] = useState({
    id: null,
    title: "",
    votes: 0,
    tag: "ui",
    commentscount: 0,
    feedback: "",
    comments: [],
    status: "planned",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddFeedback = () => {
    sendDataToParent(inputData);
    toggleModals(false);
  };

  if (!activeModal) return null; // Return nothing if the modal shouldn't be shown

  return (
    <div className="modal-overlay t-2 absolute inset-0 bg-whiteGrey pb-2 pl-4 pr-4">
      <div className="btn-cont row flex w-full items-center justify-between  pb-2  pt-2">
        {" "}
        <button
          className="row flex items-center justify-between gap-4 pb-4  pt-4 align-baseline"
          // onClick={() => setCommentsModal(false)}
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
          <p
            className="text-xs font-bold text-[#647196]"
            onClick={() => setActiveModal(false)}
          >
            Go back
          </p>
        </button>{" "}
      </div>
      <div className="modal-content rounded-main bg-white p-4">
        <h2 className="mb-6 text-lg font-bold">Create New Feedback</h2>
        {
          <div
            className={activeModal ? " bg-green-700 h-fit w-full " : "hidden"}
          >
            <form className="align-start flex-col items-center justify-start  gap-5">
              <label className="text-xs font-bold">Feedback title</label>
              <p className="mb-6 text-xs font-normal text-[#647196]">
                Add short, desreptive feedback
              </p>
              <input
                className="mb-6 w-full rounded-main bg-whiteGrey p-4 text-xs font-normal"
                type="text"
                name="title"
                id=""
                value={inputData.tittle}
                onChange={handleInputChange}
              />
              <label className="text-xs font-bold">Category</label>
              <p className="mb-6 text-xs font-normal text-[#647196]">
                Choose a category for your feedback
              </p>
              <select
                className="mb-6 w-full rounded-main bg-whiteGrey p-4 text-xs font-normal"
                name="tag"
                value={inputData.tag}
                onChange={handleInputChange}
              >
                <option value="ui">UI</option>
                <option value="ux">UX</option>
                <option value="enhancement">Enhancement</option>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
              </select>
              <label className="text-xs font-bold">Feedback detail</label>
              <p className="mb-6 text-xs font-normal text-[#647196]">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                className="w-full resize-none rounded-main bg-whiteGrey p-4 text-xs font-normal"
                value={inputData.feedback}
                onChange={handleInputChange}
                type="textarea"
                rows="5"
                cols="20"
                name="feedback"
                id=""
              />
            </form>

            <div className="mt-6 flex  flex-col">
              <button
                className="rounded-main bg-purple  pb-4 pt-4  text-center text-xs font-bold text-white"
                onClick={handleAddFeedback}
              >
                Add Feedback
              </button>
              <button
                className="mb-4 mt-4  rounded-main bg-[#3A4374]  pb-4 pt-4 text-center text-xs font-bold text-white"
                onClick={() => setActiveModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
