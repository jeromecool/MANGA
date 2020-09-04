module.exports = {
    get: (req, res) => {
        res.render('contact', {
            page: res.req.url
        })
    }
}