/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true
	},
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/index',
			},
		]
	},
	images: {
		remotePatterns: [
			{
				hostname: 'localhost'
			},
			{
				hostname: '127.0.0.1'
			},

			{
				hostname: 'theonebureau.design'
			},

			{
				hostname: 'a.theonebureau.design'
			},

			{
				hostname: 'images.unsplash.com'
			}
		],

		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},

}

module.exports = nextConfig
