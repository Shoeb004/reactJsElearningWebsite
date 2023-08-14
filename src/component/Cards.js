import React, { useState } from 'react'
import Card from './Card'
import './Cards.css'

function Cards(props) {
  const data = props.data;
  const filterQuery = props.filterQuery;
  const [likedCourses, setLikedCourses] = useState([])
  const getCourses = () => {
    let cardData = [];

    if (filterQuery === "All") {
      Object.values(data).forEach((element) => {
        element.forEach((data) => {
          cardData.push(data);
        })
        
      });
      return cardData;
    }
    else{
      Object.values(data[filterQuery]).forEach((element) => {
        // element.forEach((data) => {
        //   cardData.push(data);
        // })
        cardData.push(element)

      });
      return cardData;
    }
  }
  // console.log(data);
  console.log(getCourses());
  return (
    <div className='cards-container'>
      {getCourses().map((cardData) => {
        return (
          <Card cardData={cardData} 
          key={cardData.id}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          />
        )
      })}
    </div>
  )
}

export default Cards
