import React from 'react'
import "../../chatBot.css"

const UserChatComponent = () => {
    return (
        <>
        <input type='checkbox' id='check'/>
        <label className='chat-Btn' htmlFor='check'>
            <i className = "bi bi-chat-dots comment"></i>
            <i className = "bi bi-x-circle close"></i>
        </label>
        </>
    )
}

export default UserChatComponent