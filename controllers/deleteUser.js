const deleteUser = async (req, res) => {
    try {

        return res.status(200).json({ message: 'success', response });
    } catch (error) {
        return res.status(500).json({ message: 'Failed', error });
    }
}

module.exports = { deleteUser }