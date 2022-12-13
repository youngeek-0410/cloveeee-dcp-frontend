import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { FirstLoadView } from "./FirstLoadView";

type Story = ComponentStoryObj<typeof FirstLoadView>;
type Meta = ComponentMeta<typeof FirstLoadView>;

const meta: Meta = {
  component: FirstLoadView,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    receiverName: "山田圭介",
  },
};
