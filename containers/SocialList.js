import React from "react";

function SocialList() {
  return (
    <>
      <div className="codex-er-social-list">
        <div className="codex-er-list">
          <a href="#">
            <span>
              <i className="fab fa-facebook-f"></i> <span>15000</span>
              Likes
            </span>
            <span>Like</span>
          </a>
          <a href="#">
            <span>
              <i className="fab fa-twitter"></i> <span>15000</span> Likes
            </span>
            <span>Tweet</span>
          </a>
          <a href="#">
            <span>
              <i className="fab fa-behance"></i> <span>5k+</span> Follower
            </span>
            <span>Follow</span>
          </a>
          <a href="#">
            <span>
              <i className="fab fa-youtube"></i> <span>15000</span>
              Subscribe
            </span>
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default SocialList;
