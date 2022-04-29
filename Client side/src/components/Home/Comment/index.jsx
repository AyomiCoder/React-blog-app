import React from 'react'
import { FaRegCommentAlt } from "react-icons/fa";

const Comment = () => {
  return (
    <div>
        <h4><FaRegCommentAlt /> Comments</h4>
        <div   className='searchBar-wrap'>
        <form action='POST'>
        <input
        type='text'
        placeholder='Full Name'
      />
      {/* <br />
      <input
        type='text'
        placeholder='comment here'
      />
      <br />
      <button>Submit Comment</button> */}
    </form>
    </div>
    </div>
  )
}


export default Comment