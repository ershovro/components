import React from 'react';
import {render} from 'react-dom';
import InfiniteScroll from './react/InfiniteScroll';
import data from './react/InfiniteScroll/data';

render(
    <InfiniteScroll list={data} />,
    document.getElementById('root')
)