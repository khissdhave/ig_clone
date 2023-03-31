import React, { useState } from 'react';
import Post from './posts/Post'
import Suggestions from './Suggestions'
import "./Timeline.css"

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "keina__22",
      postImage:
        "https://img.freepik.com/premium-photo/anime-girl-watching-sunset-3d-illustration_717906-1417.jpg?w=2000",
      likes: 54884,
      timestamp: "2d",
    },
    {
      user: "dhave_69",
      postImage:
        "https://doitbeforeme.com/wp-content/uploads/2022/12/Dark-aesthetic-anime-boy.webp",
      likes: 412232,
      timestamp: "1d",
    },
    {
      user: "keinaa__22",
      postImage:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/66A2/production/_107847262_gettyimages-1152276563-594x594.jpg",
      likes: 17740,
      timestamp: "3d",
    },
    {
      user: "valisssa_12",
      postImage:
        "https://todaysparent.mblycdn.com/tp/resized/2017/06/1200x630/when-your-kid-becomes-a-meme.jpg",
      likes: 1844,
      timestamp: "8d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline