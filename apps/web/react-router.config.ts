import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	prerender: ['/*?'],
	serverBuildFile: 'index.js',
	serverModuleFormat: 'esm',
	serverDependenciesToBundle: ['@react-router/node'],
	serverConditions: ['workerd', 'worker', 'browser'],
	serverMainFields: ['browser', 'module', 'main'],
	serverPlatform: 'node',
} satisfies Config;
