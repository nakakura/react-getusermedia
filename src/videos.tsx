/// <reference path="../typings/bundle.d.ts" />

import * as React from 'react';

interface ITodo {
    description: string;
    key: number;
}

export interface IMainState {
}

export interface IMainProps {
    streams: MediaStream[];
}

export class Videos extends React.Component<IMainProps, IMainState> {
    constructor () {
        super();
        this.state = {};
    }

    render () {
        var videos = _(this.props.streams).filter((item: MediaStream)=> {
            return item.active;
        }).map(item => {
            return <video autoPlay key={item.id} src={window.URL.createObjectURL(item)}></video>
        }).value();

        return (
            <div>
                {videos}
            </div>
        );
    }

    componentWillMount() {
        _.each(this.props.streams, (stream: MediaStream)=>{
            stream.onactive = ()=>{
                this.setState(this.state);
            };
            stream.oninactive = ()=>{
                this.setState(this.state);
            };
        });
    }

    componentDidMount() { console.log('Component Did Mount', arguments); }

    componentWillReceiveProps() { console.log('Component Will Receive Props', arguments); }

    componentWillUpdate() { console.log('Component Will Update', arguments); }

    componentDidUpdate() { console.log('Component Did Update', arguments); }

    componentWillUnmount() { console.log('Component Will Unmount', arguments);}
}
