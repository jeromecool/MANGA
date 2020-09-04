module.exports = {
    get: (req, res) => {
        res.render('page-id', {
            page: res.req.url
        })
    }
}