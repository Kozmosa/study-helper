const fs = require('fs')

class Database{
    constructor(filePath) {
        this.data = JSON.parse(fs.readFileSync(filePath))
        this.filePath = filePath
    }

    eval(sentence){
        return eval(sentence)
    }

    GetArticleStatus() {
        return this.data.status
    }

    GetArticleContent(id) {
        return this.data.details[id]
    }
}

module.exports = Database