import React from 'react'

const CategorySelector = (props) => {
  return (
    <div>
      <div className="dropdown flex">
        <div className="select-container text-center">
          <select defaultValue="all" className={`${props.mode}`==="light"?'rounded-lg p-2 border border-gray-200 font-mono text-white w-56 bg-blue-400 hover:bg-blue-300':'rounded-lg p-2 border border-gray-200 font-mono text-white w-56 bg-slate-900 hover:bg-slate-700'} onChange={props.changeCategory} name="category" id="category-selector">
            <option key='1' value="business">Business</option>
            <option key='2' value="entertainment">Entertainment</option>
            <option key='3' value="general">General</option>
            <option key='4' value="health">Health</option>
            <option key='5' value="science">Science</option>
            <option key='6' value="sports">Sports</option>
            <option key='7' value="technology">Technology</option>
            <option key='8' value="all">All</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CategorySelector
