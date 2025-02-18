/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

function half(value) {
	return value.replace(/\d+(.\d+)?/, (number) => number / 2);
}

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['serif'],
			mono: ['RobotoMono', 'monospace'],
			wendyOne: ['Wendy One', 'sans-serif'],
			signikaNegativeSC: ['Signika Negative SC', 'sans-serif'],
		},
		extend: {
			minHeight: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
			},
			colors: {
				'grey-lightDefault': '#ffffff',
				'grey-light50': '#f9fafb',
				'grey-light100': '#f3f4f6',
				'grey-light200': '#e5e7eb',
				'grey-light300': '#d1d5db',
				'grey-light400': '#9ca3af',
				'grey-light500': '#6b7280',
				'grey-light600': '#4b5563',
				'grey-light700': '#374151',
				'grey-light800': '#1f2937',
				'grey-light900': '#111827',
				'grey-light950': '#030712',

				'grey-darkDefault': '#030712',
				'grey-dark50': '#111827',
				'grey-dark100': '#1f2937',
				'grey-dark200': '#374151',
				'grey-dark300': '#4b5563',
				'grey-dark400': '#6b7280',
				'grey-dark500': '#9ca3af',
				'grey-dark600': '#d1d5db',
				'grey-dark700': '#e5e7eb',
				'grey-dark800': '#f3f4f6',
				'grey-dark900': '#f9fafb',
				'grey-dark950': '#ffffff',

				'emerald-500': '#10b981',
				'emerald-800': '#045238FF',
			},
			screens: {
				xs: '390px',
				sm: '641px',
				md: '768px',
				lg: '1025px',
				tablet: '641px',
				desktop: '1025px',
			},
			transitionProperty: {
				select: 'max-height padding',
			},
			zIndex: {
				navigation: 1000,
				'mobile-navigation': 1100,
			},
			spacing: {
				15: '3.75rem',
			},
		},
	},
	plugins: [
		require('tailwindcss-touch')(),
		plugin(({ addUtilities, e, theme, variants }) => {
			Object.entries(theme('gap')).forEach(([key, value]) =>
				addUtilities(
					{
						[`.flex-gap-${e(key)}`]: {
							margin: `-${half(value)}`,
							'& > *': {
								margin: half(value),
							},
						},
						[`.flex-gap-x-${e(key)}`]: {
							marginRight: `-${half(value)}`,
							marginLeft: `-${half(value)}`,
							'& > *': {
								marginRight: half(value),
								marginLeft: half(value),
							},
						},
						[`.flex-gap-y-${e(key)}`]: {
							marginTop: `-${half(value)}`,
							marginBottom: `-${half(value)}`,
							'& > *': {
								marginTop: half(value),
								marginBottom: half(value),
							},
						},
					},
					variants('gap')
				)
			);
		}),
	],
};
