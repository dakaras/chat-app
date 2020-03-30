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


let socket;

function sendChatAction(value) {
    socket.emit('chat message', value);
}

export default function Store(props){
    if (!socket){
        socket = io(':3001')
        socket.on('chat message', function (msg) {
            console.log({msg})
        });
    }
    const user = 'daniel' + Math.random(100).toFixed(2)

    const [allChats] = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}