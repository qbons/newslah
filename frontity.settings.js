const settings = {
	name: "newslah",
	state: {
		frontity: {
			url: "https://test.frontity.org",
			title: "Test Frontity Blog",
			description: "WordPress installation for Frontity development",
		},
	},
	packages: [
		{
			name: "newslah-theme"
		},
		{
			name: "@frontity/wp-source",
			state: {
				source: {
					url: "https://newslah.demoapp.xyz",
				}
			},
		},
		"@frontity/tiny-router",
		"@frontity/html2react",
	],
};

export default settings;
