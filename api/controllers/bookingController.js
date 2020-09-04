module.exports = {
    get: (req, res) => {
        res.render('booking', {
            page: res.req.url
        })
    }
}