/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';
import {TodoItem} from './todoItem';

interface ITodo {
    description: string;
    key: number;
}

export interface IMainState {
}

export interface IMainProps {
    stream: MediaStream;
}

export class VideoPlayer extends React.Component<IMainProps, IMainState> {
    constructor () {
        super();
    }

    render () {
        console.log("render");
        return (
            <div>
                <video autoPlay src={window.URL.createObjectURL(this.props.stream)}></video>
            </div>
        );
    }
}
