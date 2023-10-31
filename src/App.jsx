import { useEffect, useState } from "react";
import AddFeedback from "./components/compfold/addFeedback";
import ComModal from "./components/compfold/comModal";
import RoadMapModal from "./components/compfold/roadMapModal";
import RoadMapCounter from "./components/compfold/roadMapCounter";
import TagFilter from "./components/compfold/tagFilter";
import TopBar from "./components/compfold/topBar";
import EditModal from "./components/compfold/editModal";
import TasksDisplay from "./components/compfold/tasksDisplay";
import NavBar from "./components/compfold/navBar";
import { arr } from "./data.jsx";

export default function App() {
  const [allTasks, setAllTasks] = useState(arr);
  const [displayedTasks, setDisplayedTasks] = useState(arr);
  const [toggleAddModal, setToggleAddModal] = useState(false);
  const [commentsModal, setCommentsModal] = useState(false);
  const [joice, setJoice] = useState();
  const [roadModal, setRoadModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [roadMapCounts, setRoadMapCounts] = useState({});
  const [editModalActive, setEditModalActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [tasksDisplayModal, setDisplayModal] = useState(true);
  const [toggleTaskDisplay, setToggleTaskDisplay] = useState(true); /// ustaw na true
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    setToggleTaskDisplay(!(toggleAddModal || commentsModal));
  }, [toggleAddModal, commentsModal]);

  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
  const handleAddFeedbackClick = () => {
    setToggleAddModal(true);
  };
  const handleDataFromChild = (inputData) => {
    const newId = new Date().getTime();

    setAllTasks((prevTasks) => [...prevTasks, { ...inputData, id: newId }]);

    setToggleAddModal(false);
  };

  const handleSortBy = (item) => {
    setDisplayedTasks(item);
  };

  const handleTaskDisplay = (item) => {
    setCommentsModal(true);
    setJoice(item);
  };

  const handleCommentUpdate = (updatedJoice) => {
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedJoice.id ? updatedJoice : task
      )
    );
    setJoice(updatedJoice);
    setDisplayModal(false);
  };
  const handleUpdate = (updatedData) => {
    setAllTasks(
      allTasks.map((item) => (item.id === updatedData.id ? updatedData : item))
    );

    setEditModalActive(false);
  };

  const handleOpenRoadModal = (data) => {
    setRoadModal(data);
    setToggleTaskDisplay(false);
    if (roadModal === true) {
      setToggleTaskDisplay(true);
    }
  };

  const handleCounts = (plannedCount, inProgressCount, liveCount) => {
    setRoadMapCounts({ plannedCount, inProgressCount, liveCount });
  };
  const handleEditModalActive = () => {
    setEditModalActive(true);
  };
  const handleVoteUpdate = (updatedTasks) => {
    setAllTasks(updatedTasks);
    setJoice(updatedTasks);
  };
  const handleSetCommentsModal = (data) => {
    setCommentsModal(data);
    setEditModalActive(data);
    setCommentsModal(false);
  };
  const handleDeleteTask = (id) => {
    const afterRemove = allTasks.filter((item) => item.id !== id);
    setAllTasks(afterRemove);
    setEditModalActive(false);
  };
  const handleToggleModals = () => {
    setCommentsModal(false);
  };
  const handleToggleTest = (updated) => {
    setNavBar(updated);
    console.log(updated);
  };

  return (
    <>
      <div className="font-[jost] p-0 m-0 border-0">
        {" "}
        <NavBar updated={handleToggleTest} />
        <div className={navBar ? "flex h-screen w-full" : "hidden"}>
          <div className="absolute  w-72 h-full bg-whiteGrey">
            <TagFilter
              tags={tags}
              allTasks={allTasks}
              setDisplayedTasks={setDisplayedTasks}
            />

            <div className="roadMapCont flex-col m-4 p-6 bg-white">
              <RoadMapCounter
                allTasks={allTasks}
                openRoadModal={handleOpenRoadModal}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 top-20 -z-20">
        {" "}
        <div className="column-two bg-whiteGrey flex flex-col ">
          <TopBar
            onAddFeedbackClick={handleAddFeedbackClick}
            allTasks={allTasks}
            update={handleSortBy}
          />

          {toggleTaskDisplay ? (
            <div
              className={"absolute top-16 -z-20 tasks-cont pb-2  bg-whiteGrey"}
            >
              <TasksDisplay
                displayedTasks={displayedTasks}
                handleTaskDisplay={handleTaskDisplay}
                onVoteUpdate={handleVoteUpdate}
                tasksDisplayModal={tasksDisplayModal}
              />
            </div>
          ) : null}
        </div>
      </div>
      <AddFeedback
        activeModal={toggleAddModal}
        setActiveModal={setToggleAddModal}
        sendDataToParent={handleDataFromChild}
        toggleModals={handleToggleModals}
      />
      {commentsModal ? (
        <ComModal
          setJoice={setJoice}
          joice={joice}
          onUpdate={handleCommentUpdate}
          setCommentsModal={setCommentsModal}
          setEditModalActive={handleEditModalActive}
          displayedTasks={displayedTasks}
        />
      ) : null}
      {roadModal ? (
        <RoadMapModal
          allTasks={allTasks}
          setRoadModal={setRoadModal}
          handleCounts={handleCounts}
        />
      ) : null}{" "}
      {editModalActive ? (
        <EditModal
          joice={joice}
          setEditModalActive={handleEditModalActive}
          onUpdate={handleUpdate}
          settingToggleEditModal={handleSetCommentsModal}
          deleteTaskId={handleDeleteTask}
        />
      ) : null}
    </>
  );
}
{
  /* zrobic modala z displea taskow?
  /* przeslac filter z roadmapmodal do displeyed tasks i wysiwtlic je na nowo albo wyswietlic je w roadmap z switchem w roadmap
  /* pos FIXED!
 /* ostyluj roadmape i zmniejsz jeszcze comp nav i popraw vote counter
 /* fireBase!!!!!
  /*  https://www.w3schools.com/react/react_router.asp

  /* https://www.youtube.com/watch?v=TNhaISOUy6Q react hooks
  /* https://www.w3schools.com/react/react_usecontext.asp hooks 3w

  /* ostyluj com modala
  /*https://chat.openai.com/c/ea3c6aad-3db4-4c63-84d4-5db248302374*/
}
{
  /* cisnij cipo bo sie zesrasz*/
  /* https://www.youtube.com/watch?v=MZVnRYpWx0w&list=PLvyZdqt1XP-mArXXKH9ZpK6h02nyeRZDs&index=29*/
}
