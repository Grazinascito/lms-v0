import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VisionCardGroup from "./VisionCardGroup";

export default {
  title: "Components/Molecules/VisionCardGroup",
  component: VisionCardGroup,
} as Meta;

const Template: StoryFn = (args) => <VisionCardGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};
