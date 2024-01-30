/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'elementalconstructora.com.ar',
			},
		],
	},
};

module.exports = withVideos(nextConfig);
