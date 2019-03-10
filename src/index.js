// import axios from './node_modules/axios/dist/axios.min.js'
// import Dropbox './node_modules/dropbox/dist/Dropbox-sdk.min.js'
// import Dropbox from "https://unpkg.com/dropbox/dist/DropboxTeam-sdk.min.js"
import axios from 'axios'
import {Dropbox} from 'dropbox'
import {config} from '../config.js'
import './index.css'

console.log('Hello World')

// import marked from './node_modules/marked/marked.min.js'

// console.log(window.Dropbox.Dropbox)

// const dbx = new Dropbox.Dropbox({
//   accessToken: config.ACCESS_KEY,
//   fetch: window.fetch,
// })

// dbx
//   .filesListFolder({path: ''})
//   .then(function(response) {
//     console.log(JSON.stringify(response, null, 4))
//   })
//   .catch(function(e) {
//     console.error(e)
//   })

// dbx
//   .filesDownload({path: '/ANNOUNCEMENTS.md'})
//   .then(function(response) {
//     var blob = response.fileBlob
//     var reader = new FileReader()
//     reader.addEventListener('loadend', function() {
//       console.log(reader.result) // will print out file content
//     })
//     reader.readAsText(blob)
//   })
//   .catch(function(e) {
//     console.error(e)
//   })

// console.log(marked('#Some Text'))
