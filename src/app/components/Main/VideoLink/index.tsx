import React from 'react';

type Props = {
    url: string
}

export function VideoLink(props: Props) {
    const {url} = props;

    return <div className="Size-Wrapper">
        <a href={url} target="_blank" className="Link-To-Video">Video</a>
    </div>
};