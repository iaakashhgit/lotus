const connection = require('../config/db')

const createUser = async (req, res) => {
    try {
        const { fullName, email, mobile } = req.body
        // SQL query to insert user data into the User table
        const insertQuery = 'INSERT INTO user (fullName, email, mobile) VALUES (?, ?, ?)';

        connection.query(insertQuery, [fullName, email, mobile], (error, results) => {
            connection.end(); // Close the database connection

            if (error) {
                console.error('Error inserting user:', error);
                return res.status(500).json({ message: 'Failed to add user', error: error.message });
            }

            return res.status(200).json({ message: 'User successfully added', insertedUserId: results.insertId });
        });
    } catch (error) {
        return res.status(500).json({ message: 'Failed', error });
    }
};

module.exports = { createUser }