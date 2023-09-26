import Image from "next/image";

interface Props {
  img: string;
  title: string;
  author: string;
}
function CourseCard({ img, title, author }: Props) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-1/4 px-2">
      <div className="border cursor-pointer relative">
        <Image
          src={img}
          alt="Login"
          width="400"
          height="100"
          className="object-fill"
          priority
        />
      </div>
      <div>
        <h2 className="text-sm md:text-lg font-semibold mt-2">{title}</h2>
        <p className="text-xs">{author}</p>
      </div>
     
    </div>
  );
}

export default CourseCard;
