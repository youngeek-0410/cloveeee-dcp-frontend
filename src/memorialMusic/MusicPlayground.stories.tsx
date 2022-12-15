import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { exampleSpotifyMusic } from "../mocks/examples";

import { MusicPlayground } from "./MusicPlayground";

type Story = ComponentStoryObj<typeof MusicPlayground>;
type Meta = ComponentMeta<typeof MusicPlayground>;

const meta: Meta = {
  component: MusicPlayground,
  decorators: [],
};

export default meta;

export const Default: Story = {
  args: {
    spotifyMusic: exampleSpotifyMusic,
  },
};
