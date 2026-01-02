import Link from "next/link";
import { bannerTexts } from "@/lib/navsLinks";
import LogoLink from "./LogoLink";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

const NavDropdown = ({ item }: { item: NavItem }) => (
  <div className="nav-item dropdown">
    <Link
      href="#"
      className="nav-link dropdown-toggle"
      id={`navbar${item.label}`}
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {item.label}
    </Link>
    <ul className="dropdown-menu" aria-labelledby={`navbar${item.label}`}>
      {item.dropdown?.map((subitem, idx) => (
        <li key={`${item.label}-${idx}`}>
          <Link href={subitem.href} className="dropdown-item">
            {subitem.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NavLink = ({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <Link
    href={item.href}
    className={`nav-item nav-link${isActive ? " active" : ""}`}
  >
    {item.label}
  </Link>
);

const CtaButton = () => (
  <div className="nav-btn ps-3">
    <Link
      href={bannerTexts.cta.href}
      className="btn py-2 px-4 ms-0 ms-lg-3 d-flex align-items-center"
      style={bannerTexts.cta.style}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <i
        className={`${bannerTexts.cta.icon} me-2`}
        style={{ fontSize: "1.3em" }}
      ></i>
      {bannerTexts.cta.label}
    </Link>
  </div>
);

const NavMenu = () => {
  return (
    <div className="nav-bar px-0 py-lg-0" style={{ height: "80px" }}>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end ">
        {/* Logo Mobile */}
        <LogoLink
          className="navbar-brand-2 d-lg-none"
          imageClassName="mt-2"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav mx-0 mx-lg-auto bg-white ">
            {bannerTexts.nav.map((item, idx) =>
              item.dropdown ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <NavLink key={item.href} item={item} isActive={idx === 0} />
              )
            )}
            <CtaButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
