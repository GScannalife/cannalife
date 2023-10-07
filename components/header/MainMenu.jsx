import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
} from "../../data/menu";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="">
            <div className="logo">
              <Link href="/" className="">
                <img src="/images/logo/cannalife-icon.svg" alt="" width={115}/> 
              </Link>
              <br></br>
              <p><strong>Coming Soon...</strong></p>
            </div>
          </li>
          {/* End li */}

         
        </ul>
        {/* End ul */}

      </div>
    </nav>
  );
};

export default MainMenu;
