import React from 'react'
import io from 'socket.io-client'

export const CTX = React.createContext()

/*
    msg {
        from: 'user',
        msg: 'hi',
        topic: 'general
    }
    
    state {
        general: [{msg1}, {msg2}, {msg3}, {newMsg}],
        topic2: []
    }

*/

const initialState = {
    general: [
        {from: 'Daniel', msg: 'hallo'},
        {from: 'Tom', msg: 'hallo'},
        {from: 'Daniel', msg: 'hallo'}
    ],
    topic2: [
        {from: 'Daniel', msg: 'hallo'},
        {from: 'Tom', msg: 'hallo'},
    ]
}

function reducer(state, action){
    const [from, msg, topic] = action.payload
    switch(action.type){
        case 'RECEIVE_MESSAGE': 
        return {
            ...state,
            [topic]: [
                ...state[topic],
                {
                    from: from,
                    msg: msg
                }
            ]
        }
        default: return state 
    }
}

function sendChatAction(socket, value){
        socket.emit('chat message', value);
}

let socket;

export default function Store(props){
    if (!socket){
        socket = io(':3001')
    }
    const [allChats, dispatch] = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}
        </CTX.Provider>
    )
}