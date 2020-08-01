import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    key: string,
    date: string,
    url: string
}

export function PhotoLink(props: Props) {
    const {key, date, url} = props;

    return <div key={key} className="Size-Wrapper">
        <Link className="Link-To-Picture-Info" to={`/picture/${date}`}>
            <img className="App__Picture-Item" src={url} alt="" />
        </Link>
    </div>
};