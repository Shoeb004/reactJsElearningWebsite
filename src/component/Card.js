import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';
import './Card.css'

function Card(props) {
  const courses = props.cardData;
  const likedCourses = props.likedCourses;
  const setLikedCourses = props.setLikedCourses;

  let { id, description, image, title } = courses;
  description = `${description.substring(0, 100)}...`;
  // console.log(str)

  function likedHandler(id) {

    if (likedCourses.includes(id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== id))
      toast.warning('Dislike Course')
    } else {

      if (likedCourses.length === 0) {
        likedCourses.push(id);
        toast.success("like courses")
      } else {
        setLikedCourses((prev) => {
          return [...prev, id]
        })
        toast.success("like courses")
      }
    }
  }
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={image.url} />
        <button onClick={() => likedHandler(id)}
          className='icon'>
          {likedCourses.includes(id) ?
            <FcLike fontSize='1.75rem' />
            : <FcLikePlaceholder fontSize='1.75rem' />}
        </button>
      </div>
      <div className='description-container'>
        <h3>{title}</h3>
        <p>{description}
          <input type='button' value={'More'} />
        </p>
      </div>
    </div>
  )
}

export default Card
