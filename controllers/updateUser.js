const connection = require('../config/db')

const updateUser = async (req, res) => {
    try {
        const userIdToUpdate = req.params.userId
        const newMobileNumber = req.body.newMobileNumber 
        const sql = `UPDATE user SET mobile_number = ${newMobileNumber} WHERE user_id = ${userIdToUpdate}`
        const values = [newMobileNumber, userIdToUpdate];
        connection.query(sql, values)
        return res.status(200).json({ message: 'User mobile number updated successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Failed', error });
    }
}

module.exports = { updateUser }