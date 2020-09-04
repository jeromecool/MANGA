module.exports = {
    get: (req, res) => {
        console.log(res)
        res.render('admin', {
            layout: 'adminLayout',
            page: res.req.url
        })
    }
}