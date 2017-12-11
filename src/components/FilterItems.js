import React from 'react'

const FilterItems = ({ handleChange }) => {
  return (
    <div>
      <label htmlFor="all">All</label>
      <input
        id="all"
        value="SHOW_ALL"
        name="visibilityFilterButton"
        onClick={handleChange}
        type="radio"
      />

      <label htmlFor="done">Done</label>
      <input
        id="done"
        value="DONE"
        name="visibilityFilterButton"
        onClick={handleChange}
        type="radio"
      />

      <label htmlFor="pending">Pending</label>
      <input
        id="pending"
        value="PENDING"
        name="visibilityFilterButton"
        onClick={handleChange}
        type="radio"
      />
    </div>
  )
}

export default FilterItems
