function SortComponent({ selectedOption, handleChange }) {
  return (
    <div className="sort flex row align-middle items-center">
      <p className="text-white text-xs font-normal">Sort by:</p>
      <select
        className="bg-darkgrey text-xs font-bold text-white"
        id="sort"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="most upvotes">Most Upvotes</option>
        <option value="least updates">Least Updates</option>
        <option value="most comments">Most Comments</option>
        <option value="least comments">Least Comments</option>
      </select>
    </div>
  );
}

export default SortComponent;
