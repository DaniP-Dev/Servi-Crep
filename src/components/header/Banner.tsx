import LogoLink from "./LogoLink";
import TopBar from "./TopBar";
import NavMenu from "./NavMenu";

const Banner = () => {
  return (
    <>
      {/* Solo en celulares/tablets */}
      <header className="d-lg-none">
        <div className="row bg-light">
          <div className="col">
            <NavMenu />
          </div>
        </div>
      </header>

      {/* Solo en computadores */}
      <header className="container-fluid bg-success d-none d-lg-block">
        <div className="row mx-5">
          <div className="col-2 d-flex align-items-center justify-content-end">
            <LogoLink className="" />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col">
                <TopBar />
              </div>
            </div>
            <div className="row bg-light  me-1">
              <div className="col ms-4  ">
                <NavMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Banner;
