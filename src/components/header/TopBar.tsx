import Link from "next/link";
import { bannerTexts } from "@/lib/navsLinks";

const TopBar = () => {
  return (
    <div className="topbar px-0 py-2 d-none d-lg-block" style={{ height: "45px" }}>
      <div className="row gx-0 align-items-center">
        {/* Información de contacto */}
        <div className="col-lg-8 text-center text-lg-center mb-lg-0">
          <div className="d-flex flex-wrap">
            <div className="border-end border-primary pe-3">
              <Link href="#" className="text-muted small">
                <i className={bannerTexts.location.icon}></i>
                {bannerTexts.location.label}
              </Link>
            </div>
            <div className="ps-3">
              <Link
                href={`mailto:${bannerTexts.email.label}`}
                className="text-muted small"
              >
                <i className={bannerTexts.email.icon}></i>
                {bannerTexts.email.label}
              </Link>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex justify-content-end">
            <div className="d-flex border-end border-primary pe-3">
              {bannerTexts.social.map((item, idx) => (
                <Link
                  key={item.icon}
                  className={`btn p-0 text-primary${idx < bannerTexts.social.length - 1 ? " me-3" : ""}`}
                  href={item.href}
                  aria-label={item.label}
                >
                  <i className={item.icon}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
