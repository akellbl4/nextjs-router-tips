import Link from "next/link";
import { useRouter } from "lib/router";

export default function Index() {
  const { query } = useRouter();

  return (
    <>
      <p>
        This is the example for an <a href="">article about Next.js router</a>
      </p>
      {query["redirected-from"] === "/ssr" && (
        <span className="alert">You have been redirected from /ssr</span>
      )}
      <ul>
        <li>
          <Link href="/params">
            <a>Router Client Functions</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a>Server-Side Props Redirect</a>
          </Link>
        </li>
        <li>
          <Link href="/not-found">
            <a>Server-Side Not Found</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
