import React from 'react'
import './FilterData.css'

function FilterData(props) {
  const filterData = props.filterData;
  const filterQuery = props.filterQuery;
  const setFilterQuery = props.setFilterQuery;

  return (
    <div className='button-container'>
      {filterData.map((data)=>{
        return(
          <button 
            key={data.id} 
            onClick={()=>{setFilterQuery(data.title)}}
          className={`${ filterQuery === data.title  ? 'border' : 'noborder' }`}
          >
            {data.title}
          </button>
        )
      })}
      
    </div>
  )
}

export default FilterData

