module.exports = {
	siteMetadata: {
		title: `Konferencja Samorządów Warszawskich | Wiśniowa SU`,
		description: 'Sprawdź co możemy zrobic wspólnymi siłamy na konferencji samorządów na Wiśniowej',
		author: `@Borowy Alan`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
			  // You can add multiple tracking ids and a pageview event will be fired for all of them.
			  trackingIds: [
				"UA-156094275-2"
			  ],
			  gtagConfig: {
				anonymize_ip: true,
				cookie_expires: 0,
			  },
			  pluginConfig: {
				head: true,
			  },
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
