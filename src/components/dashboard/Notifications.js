import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  //grab the notification object of const inside the this const
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{ // && is the notifications exist
              return <li key={item.id}> 
                <span className="pink-text"> {item.user} </span>
                <span> {item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications