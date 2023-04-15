import CustomButton from "@/components/customs/custom-button/CustomButton";
import CustomSelect from "@/components/customs/custom-select/CustomSelect";
import { RxCross2 } from "react-icons/rx";

const FilterBar = () => {
  const a: { title: string; size?: "big"; options: string[] }[] = [
    {
      title: "Жанры",
      size: "big",
      options: [
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
      ],
    },
    {
      title: "Страны",
      size: "big",
      options: [
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
      ],
    },
    {
      title: "Годы",
      options: [
        "something",
        "something",
        "something",
        "something",
        "something",
        "something",
      ],
    },
    {
      title: "Рейтинг",
      options: [
        "something",
        "something",
        "something",
        "something",
        "something",
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-[#1f1b2e]  mx-auto p-4">
      <div
        className="
        flex flex-col gap-2 
        sm:flex-row sm:flex-wrap sm:justify-between
        md:flex-nowrap
        "
      >
        {a.map((data) => (
          <CustomSelect key={data.title} {...data} />
        ))}
      </div>
      <div className="flex gap-2 my-6 flex-wrap">
        <CustomButton icon="plus" colorType="default">
          Бесплатные
        </CustomButton>
        <CustomButton icon="plus" colorType="default">
          По подписке
        </CustomButton>
        <CustomButton icon="plus" colorType="default">
          На языке оригинала
        </CustomButton>
        <CustomButton icon="plus" colorType="default">
          С субтитрами
        </CustomButton>
        <CustomButton icon="plus" colorType="default">
          Объемный звук
        </CustomButton>
      </div>
      <button className="text-white opacity-30 inline-flex w-[180px] items-center justify-evenly">
        <RxCross2 size={25} />
        Сбросить фильтры
      </button>
    </div>
  );
};

export default FilterBar;