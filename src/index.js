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

  const id = '1D-1pwbK80e3f6bpuG2c5Kti-ItH-JQpZ'

  function get_doc(id){
    const url = 'https://www.googleapis.com/drive/v3/files/'+id+'?alt=media'

    if(self.fetch){
    var setHeaders = new Headers();
    setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
    setHeaders.append('Content-Type', mime);

    var setOptions = {
        method: 'GET',
        headers: setHeaders
    };

    fetch(url,setOptions)
        .then(response => { if(response.ok){
        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        reader.read().then(function(result){
            var data = {}
            data = decoder.decode(result.value, {stream: !result.done});
            console.log(data);
    });
        }
    else{
        console.log("Response wast not ok");
    }
  })  .catch(error => {
        console.log("There is an error " + error.message);
        });
    }
}

get_doc(id)