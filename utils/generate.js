const generator = () => {
    var faker = require("faker")
    var _ = require("lodash")

    return {
        blogs: _.times(100, (n) => {
            return {
                "title": faker.random.words(),
                "author": faker.name.findName(),
                "url": faker.internet.url(),
                "likes": faker.random.number(),
                "id": faker.random.uuid()
            }
        })
    }
}

module.exports = generator