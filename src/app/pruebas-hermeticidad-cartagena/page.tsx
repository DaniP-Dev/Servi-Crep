import LocalServiceLanding, {
  buildLocalMetadata,
} from "@/components/local/LocalServiceLanding";
import { LOCAL_LANDINGS } from "@/lib/localLandings";

const config = LOCAL_LANDINGS.hermeticidadCartagena;

export const metadata = buildLocalMetadata(config);

export default function Page() {
  return <LocalServiceLanding config={config} />;
}
