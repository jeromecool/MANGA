module.exports = {
    get: (req, res) => {
        res.render('user', {
            page: res.req.url
        })
    }
}