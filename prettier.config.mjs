/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	plugins: [
		"@ianvs/prettier-plugin-sort-imports",
		"prettier-plugin-tailwindcss",
	],
	importOrder: [
		"^(hono/(.*)$)|^(hono$)",
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^types$",
		"",
		"^@/(.*)$",
		"",
		"^[./]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderCaseSensitive: false,
	tailwindFunctions: ["cn", "clsx", "cva"],
	bracketSpacing: true,
	trailingComma: "es5",
	useTabs: true,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
};
