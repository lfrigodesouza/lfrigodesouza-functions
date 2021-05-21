const fetch = require("node-fetch");
module.exports = async function (context, req) {
    context.log('Processing blog-latest-posts');

    const page = Number.parseInt(req.query.page || 0, 10);
    const limit = Number.parseInt(req.query.limit || 5, 10);
    const content = await fetch('https://blog.lfrigodesouza.net/content.json')
    .then((response) => response.json())
    .then((data) => data);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: content.posts.slice(page * limit, (page + 1) * limit)
    };
}