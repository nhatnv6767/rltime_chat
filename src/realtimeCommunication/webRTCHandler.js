import store from "../store/store";
import {setLocalStream} from "../store/actions/roomActions";
import Peer from "simple-peer";

const getConfiguration = () => {
    const turnIceServers = null;

    if (turnIceServers) {
        // TODO use TURN server credentials
    } else {
        console.warn("Using only STUN server")
        return {
            iceServers: [
                {
                    urls: "stun:stun.l.google.com:19302"
                }
            ]
        }
    }
}

const onlyAudioConstraints = {
    audio: true,
    video: false,
}

const defaultConstraints = {
    audio: true,
    video: true,
}


export const getLocalStreamPreview = (audioOnly = false, callbackFunc) => {
    const constraints = audioOnly ? onlyAudioConstraints : defaultConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream))
        callbackFunc()
    }).catch((err) => {
        console.log(err)
        console.log("Cannot get an access to local stream")
    })
}

let peers = {}

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
    const localStream = store.getState().room.localStream;

    if (isInitiator) {
        console.log("Preparing new peer connection as initiator")
    } else {
        console.log("Preparing new peer connection as not initiator")
    }

    peers[connUserSocketId] = new Peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream,
    })

    peers[connUserSocketId].on("signal", data => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId,
        }

        // TODO
        // pass signaling data to other users
        // socketConnection.signalPeerData(signalData)
    })

    peers[connUserSocketId].on("stream", (remoteStream) => {
        // TODO
        // add new remote stream to our server store
    })
}