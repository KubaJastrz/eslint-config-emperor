import { BASE_URL } from '~/consts';
import { getPlugins } from './_plugins';
import { Preset, getPresets } from './_presets';

export type SidebarEntry = {
	text: string;
	link: string;
	children?: SidebarEntry[];
};
export type Sidebar = Record<string, SidebarEntry[]>;

function getPresetSidebar() {
	const presets = getPresets();
	function mapEntry(preset: Preset): SidebarEntry {
		return {
			text: preset.name,
			link: `${BASE_URL}/preset/${preset.slug}`,
			children: presets.filter((p) => p.slug.startsWith(`${preset.slug}/`)).map(mapEntry),
		};
	}
	return presets.filter((preset) => !preset.slug.includes('/')).map(mapEntry);
}

function getPluginSidebar() {
	const plugins = getPlugins();
	return plugins.map((plugin) => {
		return {
			text: plugin.name,
			link: `${BASE_URL}/plugin/${plugin.name}`,
		};
	});
}

export function getSidebar(): Sidebar {
	return {
		'eslint-config-emperor': [
			{
				text: `Introduction`,
				link: `${BASE_URL}/`,
			},
			{
				text: `Release Notes`,
				link: `https://github.com/KubaJastrz/eslint-config-emperor/releases`,
			},
			{
				text: `GitHub`,
				link: `https://github.com/KubaJastrz/eslint-config-emperor`,
			},
		],
		Presets: getPresetSidebar(),
		'Rule Reference': getPluginSidebar(),
	};
}
