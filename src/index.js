import marked from 'marked'
import { config } from '../config.js'
import sheetReader from 'g-sheets-api'
import './index.css'

/* Make page visible after load */
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        // document.getElementById('load').style.visibility="hidden"
        document.getElementById('main').style.visibility = "visible"
    }
}

/* Options to pull google sheet */
const options = {
    sheetId: '1m2W_8d5TjSIIpL-f7-ecrcObqpuyp8SuTXMRL4rJQP4',
    returnAllResults: true
}
const getAnnouncements = function (data) {
    return data.filter(d => d.type == 'announcement')[0].data
}
const populateAnnouncements = function (text) {
    document.getElementById('announcement-text').innerHTML = text
}
const getHoursAndHeaders = function (data) {
    return data.filter(d => d.type == 'hours')
}
const populateHeaders = function (arr) {
    const hoursHeader = document.getElementById('hours-header')
    arr.forEach(h => {
        hoursHeader.innerHTML += `<div><strong>${h.header}</strong></div>`
    })
}

const populateHours = function (data) {
    const hoursData = document.getElementById('hours-data')
    data.forEach(d => {
        hoursData.innerHTML += `<div>${d.data}</div>`
    })
}

sheetReader(options, data => {
    const announcementText = getAnnouncements(data)
    populateAnnouncements(announcementText)

    const hoursAndHeaders = getHoursAndHeaders(data)
    populateHeaders(hoursAndHeaders)
    populateHours(hoursAndHeaders)
})