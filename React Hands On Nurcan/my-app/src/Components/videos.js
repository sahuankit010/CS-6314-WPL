import React from 'react'

const Videos = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Video List</h1>
      {props.videos.map((video) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{video.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{video.genre}</h6>
            <p class="card-text">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Videos