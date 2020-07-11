import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {useSelector, useDispatch} from 'react-redux';

import {getAllCharacters} from "../../actions/character";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const characters = useSelector(state => state.characters);
    const dispatch = useDispatch();

    const lastPage = characters?.info.pages;

    useEffect(() => {
        dispatch(getAllCharacters(currentPage));
    }, [dispatch, currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            setCurrentPage(currentPage => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && currentPage < lastPage) {
                    return currentPage + 1
                }

                return currentPage;
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastPage]);

    return (
        <div>
            {characters.results.map(character =>
                <Container key={character.id}>
                    <Span>{character.name}</Span>
                    <Image src={character.image} alt={character.name}/>
                </Container>
            )}
        </div>);
};

export default List;

const Container = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Span = styled.span`
   font-size: 25px;
   margin-right: 15px;
   color: #fff;
   font-weight: bold;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;