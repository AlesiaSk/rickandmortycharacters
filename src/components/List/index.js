import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';

import {getAllCharacters} from "../../actions/character";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const locations = useSelector(state => state.locations);
    const dispatch = useDispatch();

    const lastPage = locations?.info.pages;

    useEffect(() => {dispatch(getAllCharacters(currentPage));}, [dispatch, currentPage]);

    const handleScroll = (event) => {
        const target = event.target;

        if(target.scrollHeight - target.scrollTop === target.clientHeight && currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
            console.log('current page', currentPage);
        }
    };

    return (<Content onScroll={handleScroll}>{locations.results.map(location => <p key={location.id}>{location.name}</p>)}</Content>);
};

export default List;

const Content = styled.div`
height: 300px;
border: 2px solid deeppink;
overflow-y: auto;
`;