import UiButton from '../components/Button.vue'

export default {
    title: 'Example/Button',
    component: UiButton,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {
            control: 'color',
        },
        onClick: {},
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Medium = {
    args: {
        size: 'medium',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};