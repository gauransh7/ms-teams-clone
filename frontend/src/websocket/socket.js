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
  }

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

  sendSignal(action, message) {
    try {
      this.waitForSocketConnection(
        function () {
          var jsonStr = JSON.stringify({
            peer: store.getState().auth.user,
            action: action,
            message: message
          })
      
          this.socketRef.send(jsonStr)
        }.bind(this),
        1000
      );
    } catch (err) {
      console.log(err.message);
    }
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
