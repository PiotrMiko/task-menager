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
    <ul className="flex row justify-start flex-wrap items-start m-4 p-4  rounded-main bg-white ">
      {tags.map((tag) => (
        <li
          key={tag}
          className="cursor-pointer rounded-main bg-whiteGrey m-2 text-[#4661E6] pt-2 pb-2 pl-4 pr-4
          text-xs
          font-semibold"
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
