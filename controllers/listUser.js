const connection = require('../config/db')

const listUser = async (req, res) => {
    try {
        const sql = 'SELECT * FROM user'
        const users = connection.query(sql)
        return res.status(200).json({ message: 'Success', response: users });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to retrieve users', error: error.message });
    }
}

module.exports = { listUser }