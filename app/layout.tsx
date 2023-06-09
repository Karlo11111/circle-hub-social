"use client";

import BottomMenu from "@/components/menu/BottomMenu";
import PostPopups from "@/components/modals/PostPopups";
import NavBar from "@/components/navbar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// modal video
import "node_modules/react-modal-video/scss/modal-video.scss";

//slick
import "slick-carousel/slick/slick.css";

//custon
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  Component: any;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  let clss = "";
  pathname !== "/index-two" ? (clss = "container") : (clss = "container-fluid");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="description" content="Circlehub React Nextjs Template" />
        <title>Circlehub - React Nextjs Template</title>
      </head>
      <body>
        <ThemeProvider attribute="class" enableSystem={false}>
          <Preloader />
          <ScrollToTop />
          <NavBar clss={clss} />
          <BottomMenu />
          {children}
          {/* Popup */}
          <PostPopups />
        </ThemeProvider>
      </body>
    </html>
  );
}
