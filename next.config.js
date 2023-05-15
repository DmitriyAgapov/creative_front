/** @type {import('next').NextConfig} */
const nextConfig = {

	images: {
		remotePatterns: [
			{
				hostname: 'localhost'
			},
			{
				hostname: 'b.tdural1.ru'
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
