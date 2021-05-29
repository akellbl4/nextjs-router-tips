import Link from "next/link";
import { Params } from "components/Params";

export default function Index() {
  return (
    <>
      <Link href="/">
        <a>Back home</a>
      </Link>
      <Params />
    </>
  );
}
