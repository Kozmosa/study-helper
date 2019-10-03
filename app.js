import { Tool } from './src/tool'
const Renderer = require('./src/renderer')
const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const request = require('request')
const fs = require('fs')

// Initialize
const app = express()
const rdr = new Renderer()
const tool = new Tool()

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/api/proxy', (req, res) => {
    // get url params
    url = req.query.url
    request({
        method: 'GET',
        url: url
    }, (error, response, body) => {
        if(error) throw "Request error"
        console.log(body)
        res.send(body)
    })
})

app.get('/', (req, res) => {
    // get url params
    url = req.query.url
    request({
        method: 'GET',
        url: url
    }, (error, response, body) => {
        if (error) throw "Request error"
        console.log(body)
        res.setHeader('X-Content-Type-Options', 'false')
        res.send(body)
    })
})

app.get('/api/article', (req, res) => {
    if(!req.query.id) {
        res.jsonp({
            code: 500,
            msg: 'failure'
        })
    } else {
        const content = 
        res.jsonp()
    }
})

app.get('/api/render', (req, res) => {
    /* 
     Query params:
     <String> author
     <String> mdContent
     <String> title
     <String> tid
     */
    console.log(req.query)
    const tid = req.query.tid
    const template = fs.readFileSync('./templates/wechat.html').toString('utf-8')
    const mdContent = tool.B64Decode(req.query.mdContent)
    const htmlContent = rdr.RenderMarkdown(mdContent)
    const resultContent = rdr.Render(template, {
        author: req.query.author,
        content: htmlContent,
        title: req.query.title
    })

    res.send(resultContent)
})

app.listen(8080, () => {
    console.log('Server running on port 8080')
})