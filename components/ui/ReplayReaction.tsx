"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const ReplayReaction = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  return (
    <>
      <ul className="like-share d-flex gap-6 mt-2">
        <li className="d-center">
          <button className="mdtxt">Like</button>
        </li>
        <li className="d-center flex-column">
          <button
            className="mdtxt reply-btn"
            onClick={() => setExpanded(!expanded)}
          >
            Reply
          </button>
        </li>
        <li className="d-center">
          <button className="mdtxt">Share</button>
        </li>
      </ul>
      <form action="#">
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className="d-flex gap-3"
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: {
                  opacity: 1,
                  height: "auto",
                  marginTop: isMobile ? 10 : 24,
                },
                collapsed: { opacity: 0, height: 0, marginTop: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <input
                placeholder="Write a comment.."
                className="py-3"
                required
              />
              <button className="cmn-btn px-2 px-sm-5 px-lg-6">
                <i className="material-symbols-outlined mat-icon m-0 fs-xxl">
                  near_me
                </i>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </>
  );
};

export default ReplayReaction;
