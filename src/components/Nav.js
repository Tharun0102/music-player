import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryState, setLibraryState }) => {
    const libraryStateHandler = () => {
        setLibraryState(!libraryState);
    }
    return (
        <nav className="nav">
            <h1>OUR-PLAYER</h1>
            <button onClick={libraryStateHandler}>
                Library
                <FontAwesomeIcon
                    icon={faMusic}
                />
            </button>

        </nav>
    );
};


export default Nav;