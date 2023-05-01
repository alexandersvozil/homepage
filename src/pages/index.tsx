import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Image
        src={"/images/profile.jpeg"}
        width={1080 / 3}
        height={1352 / 3}
        className="rounded-full"
        alt="Profile picture"
      ></Image>
    </div>
  );
}
