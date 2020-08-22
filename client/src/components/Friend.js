import React from 'react'

export default function Friend(props) {
    return (
        <div>
            {props.friend && <div className='friend'>
                <h3>{props.friend.name}</h3>
                <p>id: {props.friend.id}</p>
                <p>Age: {props.friend.age}</p>
                <p>Email: {props.friend.email}</p>
            </div>}
        </div>
    )
}
