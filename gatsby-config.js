/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// or:

module.exports = {
	/* Your site config here */

	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-global-styles`,
			options: {
				pathToConfigModule: `./src/styles/global.scss`
			}
		}
	]
};
