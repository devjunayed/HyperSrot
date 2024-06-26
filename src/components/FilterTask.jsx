
const FilterTask = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-4 md:w-9/12 mb-4 items-center">
      Filter By:
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <input type="text" className="w-52 px-2 rounded-md h-8 border-none outline-none" placeholder="Assignee Name" />
        <select defaultValue="Priority" name="" id="" className="w-52 px-2 rounded-md h-8 border-none outline-none" >
          <option defaultValue="p0">P0</option>
          <option defaultValue="p1">P1</option>
          <option defaultValue="p2">P2</option>
        </select>
        <input type="date" className="outline-none w-52 md:w-64 px-2 rounded-md h-8 border-none" />
      </div>
    </div>
  )
}

export default FilterTask
