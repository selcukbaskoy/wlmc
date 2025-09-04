import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	prerender: false,
	future: {
		v3_fetcherPersist: true,
		v3_relativeSplatPath: true,
		v3_throwAbortReason: true,
	},
} satisfies Config;
