type IncrementAction = {
    type: 'increment'
    amount: number,
    timestamp: number,
    user: string
}

type DecrementAction = {
    type: 'decrement'
    amount: number,
    timestamp: number,
    user: string
}

type Action = IncrementAction | DecrementAction

function reducer(state: number, action: Action){
    if (action.type === 'increment'){
        return state + action.amount
    }
    else if (action.type === 'decrement'){
        return state - action.amount
    }
    else{
        const unexpectedAction: never = action
        throw new Error(`Unexpected Action:: ${unexpectedAction}`)
    }
}

const newState = reducer(15, {
    type: 'increment',
    user: 'John',
    amount: 5,
    timestamp: 123456
})

console.log(newState)