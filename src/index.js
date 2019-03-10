import axios from 'axios'
import marked from 'marked'
import {Dropbox} from 'dropbox'
import {config} from '../config.js'
import './index.css'

// 1. Instantiate Dropbox
const dbx = new Dropbox({
  accessToken: config.ACCESS_KEY,
  fetch: fetch,
})

// 2. Get markdown from dropbox
dbx
  .filesDownload({path: '/ANNOUNCEMENTS.md'})
  .then(function(response) {
    var blob = response.fileBlob
    var reader = new FileReader()
    reader.addEventListener('loadend', function() {
      insertHtml(reader.result)
    })
    reader.readAsText(blob)
  })
  .catch(function(e) {
    console.error(e)
  })

// 3. Convert markdown to html and insert to dom
var insertHtml = function (md) { 
  document.getElementById('announcement-text').innerHTML = marked(md)
}  
