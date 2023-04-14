// import type { Meta, StoryObj } from "@storybook/react";
// import CustomSlider from "./CustomSlider";
// import CustomButton from "../custom-button/CustomButton";
// import { data } from "autoprefixer";

// const sliderData = [
//   "Россия",
//   "США",
//   "Франция",
//   "Китай",
//   "Корея",
//   "Великобритания",
//   "Испания",
//   "Италия",
//   "Бразилия",
//   "Индия",
//   "Китай",
//   "Корея",
//   "Великобритания",
//   "Испания",
//   "Италия",
//   "Бразилия",
//   "Индия",
// ];

// const meta: Meta<typeof CustomSlider> = {
//   title: "Custom-UI/Slider",
//   component: CustomSlider,
//   tags: ["autodocs"],
//   argTypes: {
//     step: {
//       description: "шаг прокрутки",
//       control: { type: "number" },
//     },
//   },
//   parameters: {
//     backgrounds: {
//       default: "ivi",
//       values: [{ name: "ivi", value: "#312b45" }],
//     },
//   },
// };

// export default meta;

// type Story = StoryObj<typeof CustomSlider>;

// export const Default: Story = {
//   args: {
//     children: sliderData.map((i, idx) => (
//       <CustomButton colorType="default" key={idx}>
//         {i}
//       </CustomButton>
//     )),
//     step: 4,
//     visible: true,
//   },
// };

import type { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "../custom-select/CustomSelect";

const meta: Meta<typeof CustomSelect> = {
  title: "Custom-UI/Select12",
  component: CustomSelect,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "заголовок селекта",
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
  args: {
    title: "Года",
    options: ["2012", "2019", "2020", "2021"],
  },
};

export const Big: Story = {
  args: {
    title: "Жанры",
    size: "big",
    options: ["something", "something"],
  },
};
