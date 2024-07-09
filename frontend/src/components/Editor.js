import React from 'react';

const Editor = ({ markdown, onMarkdownChange }) => {
    return (
        <textarea
            value={markdown}
            onChange={(e) => onMarkdownChange(e.target.value)}
            placeholder="Type your markdown here..."
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default Editor;
