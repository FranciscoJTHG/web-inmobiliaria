import React from 'react';
import '../styles/Pagination.scss';
import { Pagination } from 'react-bootstrap';

const PaginationBasic = () => {

    let active = 3;
    let items = [];

    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <br />
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {items}
                <Pagination.Ellipsis />
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    )
}

export default PaginationBasic;