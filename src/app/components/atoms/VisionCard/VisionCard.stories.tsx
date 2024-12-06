import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import VisionCard, { VisionCardProps } from "./VisionCard";

export default {
  title: "Components/Atoms/VisionCard",
  component: VisionCard,
} as Meta;

const Template: StoryFn<VisionCardProps> = (args) => <VisionCard {...args} />;


export const Objectives = Template.bind({});
Objectives.args = {
  label: "completed objectives:",
  value: 3,
};

export const Actions = Template.bind({});
Actions.args = {
  label: "completed actions:",
  value: 5,
};

export const Tasks = Template.bind({});
Tasks.args = {
  label: "completed tasks:",
  value: 10,
};
