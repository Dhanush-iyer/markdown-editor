import React from 'react';

const Preview = ({ html }) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ border: '1px solid #ccc', padding: '10px' }}
        />
    );
};

export default Preview;
