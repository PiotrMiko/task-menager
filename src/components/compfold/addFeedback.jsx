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
    <div className="modal-overlay absolute inset-0 bg-whiteGrey t-2 pr-4 pb-2 pl-4">
      <div className="btn-cont flex row items-center justify-between pt-2  pb-2  w-full">
        {" "}
        <button
          className="flex row justify-between align-baseline items-center gap-4  pt-4 pb-4"
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
      <div className="modal-content bg-white p-4 rounded-main">
        <h2 className="text-lg font-bold mb-6">Create New Feedback</h2>
        {
          <div
            className={activeModal ? " w-full h-fit bg-green-700 " : "hidden"}
          >
            <form className="flex-col align-start justify-start items-center  gap-5">
              <label className="text-xs font-bold">Feedback title</label>
              <p className="text-xs font-normal text-[#647196] mb-6">
                Add short, desreptive feedback
              </p>
              <input
                className="bg-whiteGrey w-full rounded-main p-4 text-xs font-normal mb-6"
                type="text"
                name="title"
                id=""
                value={inputData.tittle}
                onChange={handleInputChange}
              />
              <label className="text-xs font-bold">Category</label>
              <p className="text-xs font-normal text-[#647196] mb-6">
                Choose a category for your feedback
              </p>
              <select
                className="bg-whiteGrey w-full rounded-main p-4 text-xs font-normal mb-6"
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
              <p className="text-xs font-normal text-[#647196] mb-6">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                className="bg-whiteGrey rounded-main w-full resize-none p-4 text-xs font-normal"
                value={inputData.feedback}
                onChange={handleInputChange}
                type="textarea"
                rows="5"
                cols="20"
                name="feedback"
                id=""
              />
            </form>

            <div className="flex flex-col  mt-6">
              <button
                className="bg-purple rounded-main  text-white text-center  pt-4 pb-4 text-xs font-bold"
                onClick={handleAddFeedback}
              >
                Add Feedback
              </button>
              <button
                className="bg-[#3A4374] rounded-main  text-white text-center  pt-4 pb-4 mt-4 mb-4 text-xs font-bold"
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
