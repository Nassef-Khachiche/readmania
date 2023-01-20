exports.register = async (req, res) => 
{
    let {
        fullname,
        lastname,
        email,
        password,
    } = req.body;

    console.log(fullname);

    res.status(200).json({
        message: "test message",    
    })

}