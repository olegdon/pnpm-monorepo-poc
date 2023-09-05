import UiButton from '../components/Button.vue'

export default {
    title: 'UiButton',
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