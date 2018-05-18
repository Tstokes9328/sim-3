module.exports = {

    newUser: (req, res) => {
        let {username, password, profile_pic} = req.body;
        req.app.get('db').new_user([username, password, profile_pic])
            .then(() => {
                res.status(200).send('New User Added')
            }).catch(error => console.log(error))
    },

    loginUser: (req, res) => {
        let {username, password} = req.body;
        req.app.get('db').login_user([username, password]).then((user) => {
            res.status(200).send(user[0])
        })
    }
}