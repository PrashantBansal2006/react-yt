import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
    console.log(props);
  return (
          <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="#" />
          <button><span>Save</span> <Bookmark width="15" height="15"/></button>
        </div>
        <div className="center">
          <h3>{props.company}</h3>
          <span className='time'>{props.datePosted}</span>
          <span className='job_description'>{props.post}</span>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>${props.salary}/hr</h3>
              <p>{props.location}</p>
            </div>
            
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
