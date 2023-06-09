"use client";

import GroupLeftMenu from "@/components/menu/GroupLeftMenu";
import { pageAdminTools } from "@/data/sidbarData";
import { useParams } from "next/navigation";
import avatar_13 from "/public/images/avatar-13.png";

interface PagesLayoutProps {
  params: { getLayout?: boolean };
  children: React.ReactNode;
}

const PagesLayout = ({ params, children }: PagesLayoutProps) => {
  const { getLayout } = params;
  const { pageId } = useParams();

  if (getLayout || pageId) {
    return children;
  }

  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Group Left Menu */}
            <GroupLeftMenu
              adminTools={pageAdminTools}
              img={avatar_13}
              name="Java World"
              type="Public"
            />
          </div>

          {children}
        </div>
      </div>
    </main>
  );
};

export default PagesLayout;
