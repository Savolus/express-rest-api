import express from 'express'

import Users from '../../models/users.js'

const router = express.Router()
const users = new Users()

router.get('/', (req, res) => {
    res.json(users.getAll())
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    if (!users.contains(id)) {
        return res.status(400).json({ message: `No user with id of ${id}` })
    }

    res.json(users.get(id))
})

router.post('/', (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    }

    if (!user.name || !user.email) {
        return res.status(400).json({ message: `Not all fields are passed, needs "name" and "email" to be passed` })
    }

    users.create(user)

    res.status(201).json(users.getAll())
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const data = req.body

    if (!users.contains(id)) {
        return res.status(400).json({ message: `No user with id of ${id}` })
    }

    users.update(id, data)

    res.status(201).json(users.getAll())
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    if (!users.contains(id)) {
        return res.status(400).json({ message: `No user with id of ${id}` })
    }

    users.delete(id)

    res.status(201).json(users.getAll())
})

export default router
