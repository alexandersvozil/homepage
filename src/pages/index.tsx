import Image from "next/image";
import { Inter } from "next/font/google";
import { getSortedPostsData } from "../lib/posts.js";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type PostData = {
  id: string;
  date: string;
  title: string;
};

type HomeProps = {
  allPostsData: PostData[];
};

export default function Home({ allPostsData }: HomeProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image
        src={"/images/profile.jpeg"}
        width={1080 / 4}
        height={1352 / 4}
        className="rounded-full"
        alt="Profile picture"
      ></Image>

      <h1 className="text-6xl">Alexander Svozil</h1>
      <ul>
        <li> Applied Scientist @Amazon Luxembourg (Surface Transportation)</li>
        <li>CV</li>
      </ul>
      <div className="text-4xl">Blog</div>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className="text-4xl">Talks</div>
      <div className="text-4xl">Publications</div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
