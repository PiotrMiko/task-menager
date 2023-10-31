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
    <div className="absolute flex flex-col bg-slate-400 inset-0 bg-whiteGrey p-4">
      {" "}
      <div className="btn-cont flex row items-center justify-between   w-full">
        {" "}
        <button
          className="flex row justify-between align-baseline items-center gap-4   pt-4 pb-4"
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
      <div className="flex-col justify-start items-start w-full p-4 bg-white rounded-main">
        {" "}
        <div className="text-lg font-bold  text-[#3A4374] mb-2">
          Editing: `{data.title}`
        </div>
        <label className="text-xs font-bold text-[#3A4374]">
          Feedback Tittle
        </label>
        <p className="text-slate-500 text-xs font-normal pb-3">
          Add short, desciptive headline
        </p>
        <input
          className=" bg-whiteGrey w-full rounded-main p-4 text-xs font-normal mb-6"
          name="title"
          value={tempItem.title}
          onChange={handleInputChange}
        />
        <label className="text-xs font-bold text-[#3A4374]">Category:</label>
        <p className="text-slate-500 text-xs font-normal pb-3">
          Choode a category for your feedback
        </p>
        <select
          className=" bg-whiteGrey w-full rounded-main p-4 text-xs font-normal mb-6"
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
        <p className="text-slate-500 text-xs font-normal pb-3">
          Change feate state
        </p>
        <select
          className=" bg-whiteGrey w-full rounded-main p-4  text-xs font-normal mb-6 "
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
        <p className="text-slate-500 text-xs font-normal pb-4">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className="bg-whiteGrey rounded-main w-full resize-none p-4 text-xs font-normal"
          name="feedback"
          value={tempItem.feedback}
          onChange={handleInputChange}
          id=""
          rows="6"
        ></textarea>
        <div className="flex flex-col  mt-6">
          <button
            className="bg-purple rounded-main  text-white text-center  pt-4 pb-4 text-xs font-bold"
            onClick={handleUpdate}
          >
            Save Changes
          </button>
          <button
            onClick={handleToggleEditModal}
            className="bg-[#3A4374] rounded-main  text-white text-center  pt-4 pb-4 mt-4 mb-4 text-xs font-bold"
          >
            Cancel
          </button>
          <button
            className="bg-[#D73737] rounded-main  text-white text-center  pt-4 pb-4 text-xs font-bold"
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
