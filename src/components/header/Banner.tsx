import LogoLink from "./LogoLink";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";

const Banner = () => {
  return (
    <div className="container-fluid header-top">
      <div className="container d-flex align-items-center">
        {/* Logo Desktop */}
        <div className="d-none d-lg-flex align-items-center justify-content-center h-100">
          <LogoLink
            className="navbar-brand d-flex align-items-center justify-content-center"
            style={{ height: "125px" }}
          />
        </div>

        <div className="w-100 h-100">
          <TopBar />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Banner;
