// File: components/compfold/TagFilter.js

function TagFilter({ tags, allTasks, setDisplayedTasks }) {
  const handleReset = () => {
    setDisplayedTasks(allTasks); // to wywoluje all
  };

  const filterByTag = (tag) => {
    const completeTasks = allTasks.filter((item) => item.tag === tag);
    setDisplayedTasks(completeTasks);
  };

  return (
    <ul className="row m-4 flex flex-wrap items-start justify-start rounded-main  bg-white p-4 ">
      {tags.map((tag) => (
        <li
          key={tag}
          className="m-2 cursor-pointer rounded-main bg-whiteGrey pb-2 pl-4 pr-4 pt-2 text-xs
          font-semibold
          text-[#4661E6]"
          onClick={() =>
            tag === "All" ? handleReset() : filterByTag(tag.toLowerCase())
          }
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagFilter;
