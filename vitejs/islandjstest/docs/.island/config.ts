import { defineConfig } from "islandjs"

export default defineConfig({
	themeConfig: {
		nav: [
			{
				text: 'home',
				link: "/"
			}
		],
		sidebar: {
			'/': [
				{
					text: '文章列表',
					items: [
						{
							text: 'fresh',
							link: '/artcle/fresh'
						}
					]
				}
			]
		}
	}
})