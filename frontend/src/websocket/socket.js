import store from '../store'

class WebSocketService {
  static instance = null
  stream = null
  token = null
  config  = null
  callbacks = {}

  static getInstance () {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService()
    }
    return WebSocketService.instance
  }

  constructor () {
    this.socketRef = null
    // this.stream = new MediaStream()
    // console.log(this.stream)
    
    console.log(store.getState().auth)
  }

  connect (chatroom_url) {
      console.log("chat url " + chatroom_url)
    this.socketRef = new WebSocket(chatroom_url)
    this.socketRef.onopen = () => {
      console.log('websocket open')
      // this.sendMessage({ message: 'hello world' })
    }
    this.socketRef.onmessage = e => {
      this.socketNewMessage(e.data)
    }
    this.socketRef.onerror = e => {
      console.log(e)
      // this.connect(chatroom_url)
    }
    this.socketRef.onclose = () => {
      console.log('websockets closed lets reopen')
      // this.connect(chatroom_url)
    }
  }

  close () {
    this.socketRef.close()
  }

  on (action, func) {
    this.callbacks[action] = func;
  }

  socketNewMessage (data) {
    const parsedData = JSON.parse(data)
    var peerusername = parsedData['peer']
    var action = parsedData['action']
    var message = parsedData['message']
    if(Object.keys(this.callbacks).length == 0){
        return;
    }
    this.callbacks[action](message);
    // if ('gauransh' == peerusername) {
    //   return
    // }

    // var receiver_channel_name = parsedData['message']['receiver_channel_name']

    // if (action == 'new-peer') {
    //   this.createOfferer(peerusername, receiver_channel_name)
    // }
    // const command =
    //   parsedData.command == undefined
    //     ? parsedData.message.command
    //     : parsedData.command
    // if (Object.keys(this.callbacks).length == 0) {
    //     return;
    // }
    // if (command == 'messages') {
    //     this.callbacks[command](parsedData.messages);
    // }
    // if (command == 'new_message') {
    //     this.callbacks[command](parsedData.message.message)
    // }
    // if (command == 'new_image_message'){
    //     this.callbacks[command](parsedData.message.message)
    // }
  }

//   createOfferer (peerusername, receiver_channel_name) {
//     var peer = new RTCPeerConnection(null)

//     this.addLocalTracks(peer)

//     var dc = peer.createDataChannel('channel');
//     dc.addEventListener('open', () => {
//         console.log("connection webrtc opened")
//     })
//     dc.addEventListener('message', () => {console.log("message on webrtc")})

//     var remoteVideo = createVideo(peerusername);
//     setOnTrack(peer, peerusername)
//   }

//   addLocalTracks (peer) {
//       this.stream.getTracks().forEach(track => {
//           peer.addTrack(track, this.stream)
//       })

//       return;
//   }

//   createVideo(peerusername){

//   } 

//   initChatUser (userid) {
//     this.sendMessage({ command: 'init_chat', userid: parseInt(userid) })
//   }

//   fetchMessages (userid) {
//     this.sendMessage({ command: 'fetch_messages', userid: parseInt(userid) })
//   }

//   newChatMessage (message, userid) {
//     this.sendMessage({
//       command: 'new_message',
//       text: message.text,
//       userid: parseInt(userid)
//     })
//   }

//   newChatImageMessage (id, userid) {
//     this.sendMessage({
//       command: 'new_image_message',
//       id: id,
//       userid: parseInt(userid)
//     })
//   }

//   addCallbacks (messagesCallback, newMessageCallback, newImageMessageCallback) {
//     this.callbacks['messages'] = messagesCallback
//     this.callbacks['new_message'] = newMessageCallback
//     this.callbacks['new_image_message'] = newImageMessageCallback
//   }

  getSteam () {
    return this.stream;
  }

  sendMessage (data) {
    try {
      this.socketRef.send(JSON.stringify({ ...data }))
    } catch (err) {
      console.log(err.message)
    }
  }

  sendSignal (action, message) {
    var jsonStr = JSON.stringify({
      peer: store.getState().auth.user,
      action: action,
      message: message
    })

    this.socketRef.send(jsonStr)
  }

  state () {
    return this.socketRef.readyState
  }

  waitForSocketConnection (callback) {
    var self = this
    setTimeout(function () {
      // Check if websocket state is OPEN
      if (WebSocketInstance.state() === 1) {
        console.log('Connection is made')
        callback()
        console.log(this)
        return
      } else {
        console.log('wait for connection...')
        console.log(this)
        self.waitForSocketConnection(callback)
      }
    }, 100) // wait 100 milisecond for the connection...
  }
}

const WebSocketInstance = WebSocketService.getInstance()

export default WebSocketInstance
