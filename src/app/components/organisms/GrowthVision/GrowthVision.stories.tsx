import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import GrowthVision from "./GrowthVision";

export default {
  title: "Components/Organisms/GrowthVision",
  component: GrowthVision,
} as Meta;

const Template: StoryFn = (args) => <GrowthVision {...args} />;

export const Default = Template.bind({});
Default.args = {};
