import React from "react";

const Videos = (props) => {
    
    let flag_s = props.search_string.length > 0;//search bar
    let flag_c = props.checkbox;//checkbox

    return (
        <div>
            {props.videolist.map((video, id) => {
                let myStyle = {};
                if (!video.available) {
                    myStyle.color = "red";
                }

                if (!flag_s && !flag_c) { // case1
                    return print(id, myStyle, video);

                }
                else if (!flag_s && flag_c) { //case2
                    if (video.available) {
                        return print(id, myStyle, video);
                    }
                }
                else if (flag_s && !flag_c) { //case3
                    if (video.title.toLowerCase().includes(props.search_string.toLowerCase().trim())) {
                        return print(id, myStyle, video);
                    }
                }
                else if (flag_s && flag_c) { //case4
                    if (video.title.toLowerCase().includes(props.search_string.toLowerCase().trim())) {
                        if (video.available) {
                            return print(id, myStyle, video);
                        }
                    }
                }
            })}
        </div>
    );
};

const print = (id, myStyle, video) => {
    return (
        <div className="card" key={id}>
            <div className="card-body">
                <h5 className="card-title" style={myStyle}>
                    {video.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{video.genre} </h6>
                <p className="card-text">{video.description} </p>
            </div>
        </div>
    );
}
export default Videos;
