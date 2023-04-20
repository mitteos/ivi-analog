import {Meta, StoryObj} from "@storybook/react";
import {AddReviewForm} from "@/components/screens/movie/components/Modal";

const meta: Meta<typeof AddReviewForm> = {
  title: "Components/ReviewForm",
  component: AddReviewForm,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AddReviewForm>;

export const Default: Story = {};
