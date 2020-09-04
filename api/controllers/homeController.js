module.exports = {
    get: (req, res) => {
        res.render('home', {
            page: res.req.url
        })
    }
}