const fs = require('fs')

class Database{
    constructor(filePath) {
        this.data = JSON.parse(fs.readFileSync(filePath))
        this.filePath = filePath
    }

    Save(filePath){
        const dbjson = JSON.stringify(this.data)
        fs.writeFileSync(filePath, dbjson)
        return true
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

    CreateArticle(opts) {
        const index = this.data.details.push(opts.content) - 1
        this.data.status.total+=1
        this.data.status.details.push({
            title: opts.title,
            id: index
        })
        this.Save(this.filePath)

        return true
    }
}

module.exports = Database