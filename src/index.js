import marked from 'marked'
import { config } from '../config.js'
import './index.css'

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        // document.getElementById('load').style.visibility="hidden"
        document.getElementById('main').style.visibility = "visible"
    }
}

console.log('hello world')

const id ='1VNr1aQHwS9lM_pJmVGreBDnB8_qPlzwh'

function get_doc(id) {
    const url = 'https://www.googleapis.com/drive/v3/files/' + id + '?alt=media'

    console.log(self.fetch)
    const authToken = {
        access_token: "ya29.GltiBwckko_vkbqpgZtS9qbW0Jg8pRF_5SIt_A-2Xqc7UnXFP736q4GosqczLMKT0zvEc-w0dD0pYbnylBlzThcTyNNk8MtGIJQQ6wuLoBkTuSLN65vHdZ5kMGfN"
    }
    const mime = 'application/vnd.google-apps.file'

    if (self.fetch) {
        var setHeaders = new Headers();
        setHeaders.append('Authorization', 'Bearer ' + authToken.access_token);
        setHeaders.append('Content-Type', mime);

        var setOptions = {
            method: 'GET',
            headers: setHeaders
        };

        fetch(url, setOptions)
            .then(response => {
                if (response.ok) {
                    var reader = response.body.getReader();
                    var decoder = new TextDecoder();
                    reader.read().then(function (result) {
                        var data = {}
                        data = decoder.decode(result.value, { stream: !result.done });
                        // Add to announcement-text
                        console.log(data)
                        document.getElementById('announcement-text').innerHTML = data
                    });
                }
                else {
                    console.log("Response wast not ok");
                }
            }).catch(error => {
                console.log("There is an error " + error.message);
            });
    }
}

get_doc(id)
