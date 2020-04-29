import React from 'react';
import './stylesheets.scss';

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
    }

    componentDidMount() {
        this._initObserver();
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


            if (entry.isIntersecting && entry.target.id === 'top') {
                /*
                * Scroll up
                * */


            }

            if (entry.isIntersecting && entry.target.id === 'bottom') {
                /*
                * Scroll down
                * */
            }
        })
    }

    _calcRef(index) {
        if (index === 0) {
            return this.$topRef;
        } else if (index === THRESHOLD) {
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
                        const top = HEIGHT * (index) + 'px';

                        return <div
                            key={item.key}
                            className="listView_item"
                            style={{top}}
                            ref={_ref}>
                            {item.value}
                        </div>
                    })
                }
            </div>
        );


    }
};

export default InfiniteScroll;