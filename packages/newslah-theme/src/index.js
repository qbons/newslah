import Root from "./components";
import NewslahApi from './newslahApi';

const newslahTheme = {
	name: "newslah-theme",
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			isMobileMenuOpen: false
		},
		params: {
			blog: {
				"page": 1,
				"per_page": 6,
				"orderby": "date title",
				"order": "DESC",
				"category": "",
			}
		},
	},
	actions: {
		theme: {
			toggleMobileMenu: ({state}) => {
				state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
				state.theme.isMobileMenuOpen ? document.body.classList.add('open-menu') : document.body.classList.remove('open-menu');
			},
			beforeSSR: async ({ state, actions }) => {
				await Promise.all([
					actions.source.fetch("/", {force: false}),
					actions.source.fetch("/:slug", {force: false}),
					actions.source.fetch("category", {force: false}),
					actions.source.fetch("option", {force: false}),
					actions.source.fetch("/news/detail/:slug", {force: false}),
					actions.source.fetch("/news/category/:slug", {force: false}),
				]);
			},
		},
	},
	libraries: {
		source:{ 
			handlers: NewslahApi()
			/* handlers: [] */
		}
	},
}
export default newslahTheme;