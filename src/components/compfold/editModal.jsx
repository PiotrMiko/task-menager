import { useState, useEffect } from "react";

export default function EditModal({
  joice,
  onUpdate,
  settingToggleEditModal,
  deleteTaskId,
}) {
  const [toggleEditModal, setToggleEditModal] = useState(null);
  const [data, setData] = useState(joice || {});
  const [tempItem, setTempItem] = useState({
    id: "",
    votes: "",
    title: data.title || "",
    status: data.status || "",
    tag: data.tag || "",
    comments: [],
    feedback: data.feedback || "",
  });

  useEffect(() => {
    if (joice) {
      setTempItem(joice);
    }
  }, [joice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempItem((prevTempItem) => ({
      ...prevTempItem,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (data.id === tempItem.id) {
      setData(tempItem);
      onUpdate(tempItem);
    }
  };
  const handleToggleEditModal = () => {
    setToggleEditModal(false);
    settingToggleEditModal(toggleEditModal);
  };
  const handleDeleteTask = (id) => {
    deleteTaskId(id);
  };

  return (
    <div className="bg-slate-400 absolute inset-0 flex flex-col bg-whiteGrey p-4">
      {" "}
      <div className="btn-cont row flex w-full items-center   justify-between">
        {" "}
        <button
          className="row flex items-center justify-between gap-4 pb-4   pt-4 align-baseline"
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
            onClick={handleToggleEditModal}
          >
            Go back
          </p>
        </button>{" "}
      </div>
      <div className="w-full flex-col items-start justify-start rounded-main bg-white p-4">
        {" "}
        <div className="mb-2 text-lg  font-bold text-[#3A4374]">
          Editing: `{data.title}`
        </div>
        <label className="text-xs font-bold text-[#3A4374]">
          Feedback Tittle
        </label>
        <p className="text-slate-500 pb-3 text-xs font-normal">
          Add short, desciptive headline
        </p>
        <input
          className=" mb-6 w-full rounded-main bg-whiteGrey p-4 text-xs font-normal"
          name="title"
          value={tempItem.title}
          onChange={handleInputChange}
        />
        <label className="text-xs font-bold text-[#3A4374]">Category:</label>
        <p className="text-slate-500 pb-3 text-xs font-normal">
          Choode a category for your feedback
        </p>
        <select
          className=" mb-6 w-full rounded-main bg-whiteGrey p-4 text-xs font-normal"
          id="my-select"
          name="status"
          defaultValue={tempItem.tag}
          onChange={handleInputChange}
        >
          <option value="ui">UI</option>
          <option value="ux">UX</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature</option>
        </select>
        <label className="text-xs font-bold text-[#3A4374]">
          Update Status
        </label>
        <p className="text-slate-500 pb-3 text-xs font-normal">
          Change feate state
        </p>
        <select
          className=" mb-6 w-full rounded-main bg-whiteGrey  p-4 text-xs font-normal "
          id="my-select"
          name="status"
          defaultValue={tempItem.status}
          onChange={handleInputChange}
        >
          <option value="planned">Planned</option>
          <option value="inProgress">In progress</option>
          <option value="live">live</option>
        </select>
        <label className="text-xs font-bold text-[#3A4374]">
          Feedback Detail
        </label>
        <p className="text-slate-500 pb-4 text-xs font-normal">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className="w-full resize-none rounded-main bg-whiteGrey p-4 text-xs font-normal"
          name="feedback"
          value={tempItem.feedback}
          onChange={handleInputChange}
          id=""
          rows="6"
        ></textarea>
        <div className="mt-6 flex  flex-col">
          <button
            className="rounded-main bg-purple  pb-4 pt-4  text-center text-xs font-bold text-white"
            onClick={handleUpdate}
          >
            Save Changes
          </button>
          <button
            onClick={handleToggleEditModal}
            className="mb-4 mt-4  rounded-main bg-[#3A4374]  pb-4 pt-4 text-center text-xs font-bold text-white"
          >
            Cancel
          </button>
          <button
            className="rounded-main bg-[#D73737]  pb-4 pt-4  text-center text-xs font-bold text-white"
            onClick={() => handleDeleteTask(joice.id)}
          >
            Delete
          </button>

          {/*zrob ten modal btn u gory */}
        </div>
      </div>
    </div>
  );
}
