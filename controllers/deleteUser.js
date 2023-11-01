const connection = require('../config/db')

const deleteUser = async (req, res) => {
    try {
        const userIdToDelete = req.params.userId
        const sql = `DELETE FROM user WHERE user_id = ${userIdToDelete}`
        const values = [userIdToDelete];
        connection.query(sql, values)
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed', error });
    }
}

module.exports = { deleteUser }