"use client";

import postData from "@/data/postData";
import { useState } from "react";
import RightSide from "../home/RightSide";
import HomeLeft from "../menu/HomeLeft";
import ParentComment from "../ui/ParentComment";
import Post from "../ui/Post";
import PostReaction from "../ui/PostReaction";
import SiblingComment from "../ui/SiblingComment";
import WriteComment from "../ui/WriteComment";

const SavedPostDetailsMain = () => {
  const [activeProfile, setActiveProfile] = useState<boolean>(false);
  const data = postData[2];

  return (
    <main className="main-content">
      <div className="container sidebar-toggler">
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-6 cus-z2">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-8 mt-0 mt-lg-10 mt-xl-0 d-flex flex-column gap-7 cus-z">
            <div className="post-item d-flex flex-column gap-5 gap-md-7">
              <div className="post-single-box p-3 p-sm-5">
                {/* Post */}
                <Post post={data} />

                {/* Post Reaction */}
                <PostReaction />

                {/* Write Comment */}
                <WriteComment />

                {data.comments
                  ? data?.comments.map((comment) => (
                      <div key={comment.id} className="comments-area mt-5">
                        <div className="single-comment-area ms-1 ms-xxl-15">
                          {/* Parent Comment */}
                          <ParentComment comment={comment} />

                          {/* Sibling Comment */}
                          {comment?.replies.map((reply, i, arr) => (
                            <SiblingComment
                              key={reply.id}
                              clss={
                                arr.length - 1 === i
                                  ? "single-comment-area"
                                  : "sibling-comment"
                              }
                              reply={reply}
                            />
                          ))}
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 mt-5 mt-xl-0">
            <div
              className={`cus-overflow cus-scrollbar sidebar-head ${
                activeProfile ? "active" : ""
              }`}
            >
              {/* Home Right */}
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SavedPostDetailsMain;
