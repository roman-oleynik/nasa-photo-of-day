import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    date: string,
    url: string
}

export function PhotoLink(props: Props) {
    const {date, url} = props;

    return <div className="Size-Wrapper">
        <Link className="Link-To-Picture-Info" to={`/picture/${date}`}>
            <img className="App__Picture-Item" src={url} alt="" />
        </Link>
    </div>
};