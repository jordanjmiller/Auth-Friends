import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import Friend from './Friend';

export default function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => { console.log(res);
            setFriends(res.data);
        })
        .catch(err => { console.log(err.response.data.error) });

    }, [])

    return (
        <div>
            {friends && friends.map(friend => {
                return <Friend key={friend.id} friend={friend}/>
            })}
        </div>
    )
}
