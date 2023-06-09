import SavedPostCard from "../cards/SavedPostCard";
import HomeLeft from "../menu/HomeLeft";
import avatar_2 from "/public/images/avatar-2.png";
import avatar_3 from "/public/images/avatar-3.png";
import avatar_4 from "/public/images/avatar-4.png";
import avatar_5 from "/public/images/avatar-5.png";
import avatar_9 from "/public/images/avatar-9.png";
import save_post_avatar_1 from "/public/images/save-post-avatar-1.png";
import save_post_avatar_2 from "/public/images/save-post-avatar-2.png";
import save_post_avatar_3 from "/public/images/save-post-avatar-3.png";
import save_post_avatar_4 from "/public/images/save-post-avatar-4.png";
import save_post_avatar_5 from "/public/images/save-post-avatar-5.png";

const savedPostData = [
  {
    id: 1,
    post_text:
      "Shuttle Is A Transport-Tech Company Making Daily Commutes Convenient And Affordable For The Middle-Income People ...",
    img: save_post_avatar_1,
    author: "Atikur Rahman's",
    author_avt: avatar_5,
    category: "UI/UX DESIGN",
  },
  {
    id: 2,
    post_text:
      "Integer Condimentum Scelerisque Rhoncus. Integer Sit Amet Rutrum Libero. Donec Ultrices Urna Vitae Diam Gravida ...",
    img: save_post_avatar_2,
    author: "Atikur Rahman's",
    author_avt: avatar_2,
    category: "UI/UX DESIGN",
  },
  {
    id: 3,
    post_text:
      "Aenean Interdum Tristique Malesuada. Vivamus In Leo Iaculis, Lobortis Magna Eu, Lobortis Turpis. Vivamus Vitae...",
    img: save_post_avatar_3,
    author: "Atikur Rahman's",
    author_avt: avatar_3,
    category: "UI/UX DESIGN",
  },
  {
    id: 4,
    post_text:
      "Nam Auctor Nibh Lacus, Ac Aliquam Nulla Aliquam Id. Vestibulum Ac Quam Non Est Porttitor Mollis...",
    img: save_post_avatar_4,
    author: "Atikur Rahman's",
    author_avt: avatar_4,
    category: "UI/UX DESIGN",
  },
  {
    id: 5,
    post_text:
      "Nulla Nec Efficitur Elit. Aenean Leo Nisl, Sodales Et Sagittis Et, Fermentum Id Mi. Nunc Blandit...",
    img: save_post_avatar_5,
    author: "Atikur Rahman's",
    author_avt: avatar_9,
    category: "UI/UX DESIGN",
  },
];

const SavedPostMain = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Home Left */}
            <HomeLeft clss="d-lg-none" />
          </div>
          <div className="col-xl-9 col-lg-8 cus-mar">
            <div className="filter-head mb-6 d-center justify-content-between">
              <h5>All</h5>
              <button className="d-center">
                <i className="material-symbols-outlined mat-icon"> tune </i>
              </button>
            </div>

            {savedPostData.map((post) => (
              <div
                key={post.id}
                className="single-box filter-single-box text-start p-5 p-md-3 d-grid d-xl-flex align-items-center gap-4"
              >
                {/* Saved Post Card */}
                <SavedPostCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SavedPostMain;
