import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Videos} from './videos';
import {IMainProps} from "./videos";
import {IMainState} from "./videos";

navigator.getUserMedia = ( navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia);

var hoge = "moge";

export class Controller{
    constructor(){
    }

    display(mediaStream: MediaStream[]){
        ReactDOM.unmountComponentAtNode(document.getElementById('main'));
        var hoge = ReactDOM.render(React.createElement(Videos, {streams: mediaStream}, {}), document.getElementById('main'));
    }
}


