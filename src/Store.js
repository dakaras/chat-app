import React from 'react'

const CTX = React.createContext()

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

export default function Store(props){

    const reducerHook = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )
}