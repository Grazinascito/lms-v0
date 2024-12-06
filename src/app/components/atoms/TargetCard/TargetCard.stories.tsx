import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import TargetCard, { TargetCardProps } from "./TargetCard";

export default {
  title: "Components/Atoms/TargetCard",
  component: TargetCard,
} as Meta;

const Template: StoryFn<TargetCardProps> = (args) => <TargetCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPosition: "Junior Developer",
  goalPosition: "Mid-level Developer",
};

export const SeniorGoal = Template.bind({});
SeniorGoal.args = {
  currentPosition: "Mid-level Developer",
  goalPosition: "Senior Developer",
};

export const LeadGoal = Template.bind({});
LeadGoal.args = {
  currentPosition: "Senior Developer",
  goalPosition: "Lead Developer",
};
