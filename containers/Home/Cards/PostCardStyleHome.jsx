import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "../../../lib/dateFormat";
// import image from "../../../assets/images/populer-news-1.png";

function PostCardStyleHome(props) {
  const {
    datas = { image: "", category: "", date: "", title: "" },
    className = "",
  } = props;
  return (
    <div
      className={`codex-er-video-post codex-er-recently-viewed-item ${
        className || ""
      }`}
    >
      <div className="codex-er-latest-news-item">
        <div className="codex-er-thumb">
          <img
            src={require(`../../../assets/images/${datas.image}`)}
            alt=""
          />
        </div>
        <div className="codex-er-content">
          <div className="codex-er-meta-item">
            <div className="codex-er-meta-categories">
              <a href="#">{datas.category}</a>
            </div>
            <div className="codex-er-meta-date">
              <span>
                <i className="fal fa-calendar-alt"></i>
                {dateFormat(datas.date)}
              </span>
            </div>
          </div>
          <h5 className="codex-er-title line-clump-2">
            <Link to="/details">{datas.title}</Link>
          </h5>
          <div className="codex-er-meta-author">
            <span>
              By <span>Reporter</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCardStyleHome;
