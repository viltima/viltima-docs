export const SITE = {
	title: 'Viltima',
	description: 'Welcome to the Viltima Website',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
   export const GITHUB_EDIT_URL = `https://github.com/viltima/webana`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
   export const COMMUNITY_INVITE_URL = `https://github.com/viltima/webana`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'XXXXXXXXXX',
  appId: 'XXXXXXXXXX',
  apiKey: 'XXXXXXXXXX',
}

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Application', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Mobile', link: 'en/page-2' },
		{ text: 'Web/Desktop', link: 'en/page-3' },

		{ text: 'Developers', header: true },
		{ text: 'APi', link: 'en/page-4' },
	],
};
