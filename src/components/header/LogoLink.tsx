import Link from "next/link";
import Image from "next/image";
import { CSSProperties } from "react";

interface LogoLinkProps {
  className?: string;
  imageClassName?: string;
  size?: number;
  style?: CSSProperties;
}

const LOGO_ALT = "Servicrep - Inspecciones a estaciones de gasolina y pruebas de hermeticidad bajo la norma ISO/IEC 17020";

const LogoLink = ({ className = "", imageClassName = "", size = 100, style }: LogoLinkProps) => {
  return (
    <Link href="/" className={className} style={style}>
      {/* Desktop: lg+ */}
      <Image
        className={`${imageClassName} d-none d-lg-inline`}
        src="/isologo.png"
        alt={LOGO_ALT}
        width={size}
        height={size}
      />
      {/* Mobile: xs-md */}
      <Image
        className={`${imageClassName} d-inline d-lg-none `}
        src="/isologoMobile.png"
        alt={LOGO_ALT}
        width={150}
        height={64}
      />
    </Link>
  );
};

export default LogoLink;
