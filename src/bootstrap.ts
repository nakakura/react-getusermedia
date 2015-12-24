import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {VideoPlayer} from './main';

navigator.getUserMedia = ( navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia);

navigator.getUserMedia (
    // constraints
    {
        video: true,
        audio: true
    },
    // successCallback
    function(localMediaStream) {
        var hoge = ReactDOM.render(React.createElement(VideoPlayer, {stream: localMediaStream}), document.getElementById('main'));
    },
    // errorCallback
    function(err) {
        console.log("The following error occured: " + err);
    }
);
