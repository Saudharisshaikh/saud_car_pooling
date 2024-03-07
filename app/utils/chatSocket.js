import io from 'socket.io-client';
const SOCKET_URL = "http://192.168.100.12:3000"

class SocketService {
    initializeSocket = async()=>{
        
        try{

            this.socket = io(SOCKET_URL,{
                transports : ['websocket']
            });
            console.log('initializing socket ',this.socket)

            this.socket.on('connect',(data)=>{
                console.log('socket connected',this.socket)
            })

            this.socket.on('disconnect',(data)=>{
                console.log('socket disconnected')
            })
            this.socket.on('receive_message', (data) => {
                console.log('message received in SocketService: ', data);
            });

            this.socket.on('error',(data)=>{
                console.log('socket error',data)
            })

        }
        catch(e){
            console.log('exception...',e)
        }


    }

    emit(event,data={}){
        console.log('emit here...')
        this.socket.emit(event,data)
    }
    on(event,cb){
        console.log('receive here...')
        this.socket.on(event,cb)
    }
    removeListener(listenerName){
        this.socket.emit(listenerName)
    }

}

const socketService = new SocketService();
export default socketService;