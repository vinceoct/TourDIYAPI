const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Artist } = require('../models')

const signup = async(req, res) => {
    try {
        const { email, password } = req.body

        const existingArtist = await Artist.findOne({ where: { email } })
        if (existingArtist) {
            return res.status(409).json({message: 'email already exists'})
        }

        const newArtist = await Artist.create({ email, password})
        res.status(201).json({message: 'artist registered successfully'})
    } catch (error) {
        res.status(500).json({message: 'Error registering the artist.'})
    }
}

const login = async(req, res) => {
    try{
        const { email, password } = req.body

        const artist = await Artist.findOne({ where: { email }})
        if (!user) {
            return res.status(404).json({ message: 'user not found'})
        }

        const passwordMatch = await bcrypt.compare(password, artist.password)
        if (!passwordMatch) {
            return res.status(401).json({ message: 'invalid password'})
        }

        const token = jwt.sign({ userId: user.id }, 'your-secret-key')
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: 'error logging in'})
    }
}

module.exports = {
    register,
    login
}
