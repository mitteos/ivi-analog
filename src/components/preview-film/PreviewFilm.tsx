import Image from "next/image";

const PreviewFilm = () => {
  return (
    <div className="flex-shrink-0 w-[180px] h-[280px] cursor-pointer ">
      <Image
        src="/images/one-plus-one.jpg"
        alt="one-plus-one"
        width={180}
        height={280}
        className="rounded-md"
      />
    </div>
  );
};

export default PreviewFilm;
