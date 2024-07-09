// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

const App = () => {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    useEffect(() => {
        const convertMarkdown =  () => {
            const response = axios.post('http://localhost:5000/convert', { markdown });
            response.then((res)=>{
                if(res.status === 200){
                    setHtml(res.data.html)
                }
            })
            .catch((err)=>{
                console.log('[error in convertMarkdown]',err)
            })
        };
        convertMarkdown();
    }, [markdown]);

    return (
        <div className="app">
            <div className="editor-pane">
                <Editor markdown={markdown} onMarkdownChange={setMarkdown} />
            </div>
            <div className="preview-pane">
                <Preview html={html} />
            </div>
        </div>
    );
};

export default App;
