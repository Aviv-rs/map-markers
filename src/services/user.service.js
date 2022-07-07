import { sessionService } from '@/services/session.service.js'
import { utilService } from '@/services/util.service.js'

export const userService = {
    getUser,
    updateUser,
}

const users = [
    {
        id: 'u101',
        name: "Noya",
        coins: 1000,
        moves: [{
            id: utilService.makeId(),
            toId: "5a566402ed1cf349f0b47b4d",
            to: "Rachel",
            at: 2652712571,
            amount: 2
        },
        {
            id: utilService.makeId(),
            toId: "5a566402a6499c1d4da9220a",
            to: "Shana",
            at: 2652712571,
            amount: 6
        }

        ]

    }
]


function getUser(username) {
    const user = users.find(user => user.name === username)
    if (!user) {
        const newUser = {
            id: utilService.makeId(),
            name: username,
            coins: 100,
            moves: []
        }
        users.push(newUser)
        sessionService.saveToStorage('currUser', newUser)
        return newUser
    }
    else {
        sessionService.saveToStorage('currUser', user)
        return user
    }
}

function updateUser(userId, newUser) {
    const userIdx = users.findIndex(user => user.id === userId)
    users.splice(userIdx, 1, newUser)
    sessionService.saveToStorage('currUser', users[userIdx])
    return users[userIdx]
}