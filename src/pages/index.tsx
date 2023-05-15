import Image from "next/image";
import { Inter } from "next/font/google";
import { getSortedPostsData } from "../lib/posts.js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
    <div className="flex flex-col justify-center items-center space-y-8 bg-gray-100 min-h-screen py-10">
      <Image
        src={"/images/profile.jpeg"}
        width={1080 / 4}
        height={1352 / 4}
        className="rounded-full"
        alt="Profile picture"
      />

      <h1 className="text-6xl font-bold">Alexander Svozil</h1>

      <a
        href="https://twitter.com/AlexanderSvozil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-500" />
      </a>

      <div className="flex items-center space-x-2">
        <ul className="list-disc list-inside text-xl text-gray-700">
          <li>Applied Scientist @Amazon Luxembourg (Surface Transportation)</li>
          <li>
            <a href="/path-to-your-cv" className="underline text-blue-600">
              CV
            </a>
          </li>
        </ul>
      </div>

      <h2 className="text-4xl font-bold text-gray-800">Blog</h2>

      <ul className="list-none space-y-2">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id} className="text-lg text-blue-600">
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
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
