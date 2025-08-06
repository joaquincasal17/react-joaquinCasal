import React from 'react'

const FetchTask = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: "1", text: "tarea 1", completed: false},
                {id: "2", text: "tarea 2", completed: false},
                {id: "3", text: "tarea 3", completed: false}
            ])
        }, 3000)
    })
}

export default FetchTask
