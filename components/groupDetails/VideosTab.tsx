"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import Vedios from "../common/Vedios";
import About from "./About";

const VideosTab = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      {/* Vedios */}
      <Vedios setOpen={setOpen} />

      <div className="col-xxl-4 col-lg-10 mt-5 mt-xl-0">
        {/* About */}
        <About />
      </div>
    </>
  );
};

export default VideosTab;
