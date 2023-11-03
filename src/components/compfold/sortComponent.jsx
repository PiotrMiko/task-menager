function SortComponent({ selectedOption, handleChange }) {
  return (
    <div className="sort row flex items-center align-middle">
      <p className="text-xs font-normal text-white">Sort by:</p>
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
