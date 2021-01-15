import React, {Component} from 'react';
import style from './Time.module.scss';

export class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date (props.newDate).getTime(),
        }
    }

    componentDidMount() {

        this.timeTick = setInterval(() => {
            const { time } = this.state
            this.setState({
                time: time + 1000
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeTick);
    }


    render() {
        return (
            <span className={style.tick}>{new Date(this.state.time).toLocaleString()}</span>
        )
    }
}


