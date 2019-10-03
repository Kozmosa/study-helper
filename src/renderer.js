const showdown = require('showdown')

class Renderer{
    constructor() {
        // Initialize converter
        this.converter = new showdown.Converter()
        this.converter.setOption('tables', true)
        this.converter.setOption('tasklists', true)
    }

    Render(template, contents) {
        // render template
        console.log(contents)
        let content = template.replace('${title}', contents.title)
        content = content.replace('${title}', contents.title)
        content = content.replace('${content}', contents.content)
        content = content.replace('${author}', contents.author)
        return content
    }

    RenderMarkdown(source) {
        // Render with showdown.js
        const html = this.converter.makeHtml(source)
        return html
    }
}

module.exports = Renderer