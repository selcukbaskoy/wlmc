import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	prerender: ['/*?'],
	serverBuildFile: 'index.js',
	serverModuleFormat: 'esm',
	serverConditions: ['workerd', 'worker', 'browser'],
	serverDependenciesToBundle: ['@react-router/node'],
	serverMainFields: ['browser', 'module', 'main'],
	serverMinify: process.env.NODE_ENV === 'production',
	serverPlatform: 'node',
} satisfies Config;
