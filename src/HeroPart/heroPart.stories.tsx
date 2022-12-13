import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { MainPart } from "../Root";

import { HeroPart } from "./HeroPart";

type Story = ComponentStoryObj<typeof HeroPart>;
type Meta = ComponentMeta<typeof HeroPart>;

const meta: Meta = {
  component: HeroPart,
  decorators: [
    (Story) => {
      return (
        <MainPart>
          <Story />
        </MainPart>
      );
    },
  ],
};

export default meta;

export const Default: Story = {
  args: {
    receiverName: "山田圭介",
  },
};
