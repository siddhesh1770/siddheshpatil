exports.hello = (req, res) => {
    res.status(200).json({message: 'Hello World'});
};