import marked from 'marked'
import {config} from '../config.js'
import './index.css'

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'complete') {
       // document.getElementById('load').style.visibility="hidden"
       document.getElementById('main').style.visibility="visible"
  }
}

fetch('https://drive.google.com/open?id=1D-1pwbK80e3f6bpuG2c5Kti-ItH-JQpZ')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch(e => console.log(e))
