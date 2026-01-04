"use client";

import { useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bannerTexts } from "@/lib/navsLinks";
import LogoLink from "./LogoLink";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string }[];
}

interface NavDropdownProps {
  item: NavItem;
  onLinkClick: () => void;
}

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onLinkClick: () => void;
}

interface CtaButtonProps {
  onLinkClick: () => void;
}

const navMenuStyles = {
  container: { height: "80px" },
  dropdownMenu: {
  },
};

const useCloseNavbar = () => {
  return useCallback(() => {
    const navbar = document.getElementById("navbarCollapse");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }, []);
};

const NavDropdown = ({ item, onLinkClick }: NavDropdownProps) => (
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
    <ul
      className="dropdown-menu"
      aria-labelledby={`navbar${item.label}`}
    >
      {item.dropdown?.map((subitem, idx) => (
        <li key={`${item.label}-${idx}`}>
          <Link
            href={subitem.href}
            className="dropdown-item"
            onClick={onLinkClick}
          >
            {subitem.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NavLink = ({ item, isActive, onLinkClick }: NavLinkProps) => (
  <Link
    href={item.href}
    className={`nav-item nav-link${isActive ? " active" : ""}`}
    onClick={onLinkClick}
  >
    {item.label}
  </Link>
);

const CtaButton = ({ onLinkClick }: CtaButtonProps) => (
  <div className="nav-btn ps-3">
    <Link
      href={bannerTexts.cta.href}
      className="btn py-2 px-4 ms-0 ms-lg-3 d-flex align-items-center"
      style={bannerTexts.cta.style}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      onClick={onLinkClick}
    >
      <i
        className={`${bannerTexts.cta.icon} me-2`}
        style={{ fontSize: "1.3em" }}
      />
      {bannerTexts.cta.label}
    </Link>
  </div>
);

const NavMenu = () => {
  const pathname = usePathname();
  const closeNavbar = useCloseNavbar();

  return (
    <div className="nav-bar px-0 py-lg-0" style={navMenuStyles.container}>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
        <LogoLink className="navbar-brand-2 d-lg-none" imageClassName="mt-2" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-0 mx-lg-auto">
            {bannerTexts.nav.map((item) =>
              item.dropdown ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  onLinkClick={closeNavbar}
                />
              ) : (
                <NavLink
                  key={item.href}
                  item={item}
                  isActive={pathname === item.href}
                  onLinkClick={closeNavbar}
                />
              )
            )}
            <CtaButton onLinkClick={closeNavbar} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavMenu;
