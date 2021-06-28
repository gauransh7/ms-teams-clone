// import store from '../store'
console.log('in main')

var labelUsername = document.querySelector('#label-username')
var usernameInput = document.querySelector('#username')
var btnJoin = document.querySelector('#btn-join')

var username = 'gauransh'

var webSocket

function websocketonmessage (e) {
  var parsedData = JSON.parse(e.data)
  var peerUsername = parsedData['peer']
  var action = parsedData['action']

  if (username == peerUsername) {
    return
  }

  var receiver_channel_name = parsedData['message']['receiver_channel_name']
  if (action == 'new_peer') {
  }
  //   console.log(message)
}

btnJoin.addEventListener('click', () => {
  //   username = usernameInput.value
  //   console.log(username)
  //   if (username == '') {
  //     return
  //   }

  //   usernameInput.value = ''
  //   usernameInput.disabled = true
  //   usernameInput.style.visibility = 'hidden'

  //   btnJoin.disabled = true
  //   btnJoin.style.visibility = 'hidden'

  var labelUsername = document.querySelector('#label-username')
  labelUsername.innerHTML = username

  var loc = window.location
  var wsStart = 'ws://'

  if (loc.protocol == 'https:') {
    wsStart = 'wss://'
  }

  var endpoint = wsStart + loc.host + loc.pathname

  console.log(loc)

  webSocket = new WebSocket(endpoint)

  webSocket.addEventListener('open', e => {
    console.log('connection open')

    var jsonStr = JSON.stringify({
      message: 'thi si msg'
    })
    webSocket.send(jsonStr)
    sendSignal('new-peer', {})
  })
  webSocket.addEventListener('message', websocketonmessage)
  webSocket.addEventListener('close', e => {
    console.log('connection close')
  })
  webSocket.addEventListener('error', e => {
    console.log('connection error')
  })
})

var localStream = new MediaStream()

const constraints = {
  video: true,
  audio: true
}

const localVideo = document.querySelector('#local-video')

var userMedia = navigator.mediaDevices
  .getUserMedia(constraints)
  .then(stream => {
    localStream = stream
    localVideo.srcObject = localStream
    localVideo.muted = true
  })
  .catch(error => {
    console.log(error)
  })

function sendSignal (action, message) {
  var jsonStr = JSON.stringify({
    peer: username,
    action: action,
    message: message
  })

  webSocket.send(jsonStr)
}
