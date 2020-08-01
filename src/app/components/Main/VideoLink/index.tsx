import React from 'react';

type Props = {
    key: string,
    url: string
}

export function VideoLink(props: Props) {
    const {key, url} = props;

    return <div key={key} className="Size-Wrapper">
        <a href={url} target="_blank" className="Link-To-Video">Video</a>
    </div>
};