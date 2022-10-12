import { Meta, StoryObj } from '@storybook/react'
import { text, textProps } from "./text";

export default {
    title: 'Components/Text',
    component: text,
    args: {
        children: 'Hello World',
    },
} as Meta<textProps>

export const Default: StoryObj<textProps> = {}

export const Small: StoryObj<textProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<textProps> = {
    args: {
        size: 'lg'
    }
}