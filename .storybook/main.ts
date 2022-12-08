module.exports = {
	stories: ["../packages/**/**.story.@(tsx|mdx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions"
	],
	framework: "@storybook/react"
};
