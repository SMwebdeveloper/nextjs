import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ups...</h1>
      <h2>Not Found Page</h2>
      <p>
        Back home page{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
