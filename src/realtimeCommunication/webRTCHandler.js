import store from "../store/store";
import {setLocalStream} from "../store/actions/roomActions";

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