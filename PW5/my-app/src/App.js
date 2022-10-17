import React, { useState, useEffect } from 'react';
import Videos from './videos.js';

const App = () => {
    const [videos, setVideosData] = useState({
        videos: [],
        checkbox: false,
        search_string: ""
    });
    let search_string = ""
    let checkbox = false;
    const handleChangeText = () => {
        let search_string = document.getElementById("search_text").value;
        setVideosData({ ...videos, search_string: search_string });
    }

    const handleChangeButton = () => {
        let checkbox = document.getElementById("available_checkbox").checked;
        setVideosData({ ...videos, checkbox: checkbox });

    }

    useEffect(() => {
        fetch('videos.json', {
        })
            .then(res => res.json())
            .then((data) => {

                search_string = document.getElementById("search_text").value;
                checkbox = document.getElementById("available_checkbox").checked;
                setVideosData({ videos: data, checkbox: checkbox, search_string: search_string })
            })
            .catch(console.log)
    }, [search_string.value, checkbox.checked]);

    return (
        <div>
            <div>
                <input
                    id={"search_text"}
                    type="text"
                    onChange={handleChangeText}
                    placeholder={"Search..."}
                />
            </div>
            <input type="checkbox"
                onChange={handleChangeButton}
                id="available_checkbox" />
            <label>Only show available videos</label>
            <br></br>
            <Videos videolist={videos.videos} search_string={videos.search_string} checkbox={videos.checkbox} />
        </div>
    );
}

export default App;