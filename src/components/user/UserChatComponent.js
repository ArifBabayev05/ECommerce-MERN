import React from 'react'
import "../../chatBot.css"

const UserChatComponent = () => {
    return (
        <>
            <input type='checkbox' id='check' />
            <label className='chat-Btn' htmlFor='check'>
                <i className="bi bi-chat-dots comment"></i>
                <i className="bi bi-x-circle close"></i>
            </label>
            <div className='chat-wrapper'>
                <div className='chat-header'>
                    <h6>Let's chat - Online</h6>
                </div>
            </div>
        </>
    )
}

export default UserChatComponent