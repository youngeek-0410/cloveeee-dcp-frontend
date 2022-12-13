import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { HeroPart } from "./HeroPart";

type Story = ComponentStoryObj<typeof HeroPart>;
type Meta = ComponentMeta<typeof HeroPart>;

const meta: Meta = {
  component: HeroPart,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    receiverName: "山田圭介",
    topText: "こうよう祭本当にお疲れ様でした！",
    topImage: {
      url: "https://d2i9ue9bd8dtii.cloudfront.net/media/message_images/1ihF45s/DSC_7190.JPG",
    },
    senderNameList: [
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
      "山田圭介",
    ],
  },
};
