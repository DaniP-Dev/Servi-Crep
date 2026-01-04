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
      <Image
        className={imageClassName}
        src="/isologo.png"
        alt={LOGO_ALT}
        width={size}
        height={size}
      />
    </Link>
  );
};

export default LogoLink;
