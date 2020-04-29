import React from 'react';
import './stylesheets.scss';
import {switchCase} from "@babel/types";

const THRESHOLD = 15;
const HEIGHT = 195;

class InfiniteScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: THRESHOLD - 1
        };
        this.$topRef = React.createRef();
        this.$bottomRef = React.createRef();

        this._initObserver = this._initObserver.bind(this);
        this._callBack = this._callBack.bind(this);
        this._updateState = this._updateState.bind(this);
        this._resetObservation = this._resetObservation.bind(this);
        this._calcRef = this._calcRef.bind(this);
    }

    componentDidMount() {
        this._initObserver();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.end !== this.state.end || prevState.start !== this.state.start) {
            this._initObserver();
        }
    }

    _initObserver() {
        const option = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        this._observer = new IntersectionObserver(this._callBack, option);

        if (this.$topRef.current) {
            this._observer.observe(this.$topRef.current);
        }

        if (this.$bottomRef.current) {
            this._observer.observe(this.$bottomRef.current);
        }
    }

    _callBack(entries, observer) {
        entries.forEach( entry => {

            const size = this.props.list.length;
            const {start, end} = this.state;
            const maxEnd = size - 1;
            const minEnd = THRESHOLD - 1;
            const minStart = 0;
            const maxStart = size - 1 - THRESHOLD;
            let newStart;
            let newEnd;

            if (entry.isIntersecting && entry.target.id === 'top') {
                /*
                * Scroll up
                * */
                newStart = start - 8 <= minStart ? minStart: start - 8;
                newEnd = start + 7 <= minEnd ? minEnd : start + 7;

                this._updateState(newStart, newEnd);
            }

            if (entry.isIntersecting && entry.target.id === 'bottom') {
                /*
                * Scroll down
                * */

                newEnd = end + 8 <= maxEnd ? end + 8 : maxEnd;
                newStart =  end - 7 <= maxStart ? end - 7 : maxStart;

                this._updateState(newStart, newEnd);
            }
        })
    }

    _updateState(newStart, newEnd) {
        const {start, end} = this.state;

        if (start !== newStart || end !== newEnd) {
            this._resetObservation();
            this.setState({
                start: newStart,
                end: newEnd
            });
        }
    }

    _resetObservation() {
        this._observer.unobserve(this.$topRef.current);
        this._observer.unobserve(this.$bottomRef.current);
        this.$topRef = React.createRef();
        this.$bottomRef = React.createRef();
    }

    _calcRef(index) {
        if (index === 0) {
            return this.$topRef;
        } else if (index === THRESHOLD - 1) {
            return this.$bottomRef;
        } else {
            return null;
        }
    }

    render() {
        const {list} = this.props;
        const {start, end} = this.state;
        const slicedList = list.slice(start, end + 1);

        return (
            <div className="listView">
                {
                    slicedList.map( (item, index) => {
                        const _ref = this._calcRef(index);
                        const top = HEIGHT * (index + start) + 'px';
                        let id;

                        switch(index) {
                            case 0:
                                id = 'top';
                                break;
                            case THRESHOLD - 1:
                                id = 'bottom';
                                break;
                        }

                        return <div
                            key={item.key}
                            className="listView_item"
                            style={{top}}
                            ref={_ref}
                            id={id}>
                            {item.value}
                        </div>
                    })
                }
            </div>
        );


    }
};

export default InfiniteScroll;