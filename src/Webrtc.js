import React, { forwardRef } from "react"
window.RTCPeerConnection.prototype.addStream = function addStream(stream) {stream.getTracks().forEach((track) => this.addTrack(track, stream)) };
const mediaDevices = navigator.mediaDevices
const RTCPeerConnection = window.RTCPeerConnection
const RTCSessionDescription = window.RTCSessionDescription
const RTCIceCandidate = window.RTCIceCandidate
const RTCView = forwardRef((props, ref) => <video autoPlay ref={(e) => { if (e) e.srcObject = props.streamURL }}  {...props} />)
export {
    mediaDevices,
    RTCPeerConnection,
    RTCSessionDescription,
    RTCIceCandidate,
    RTCView
}