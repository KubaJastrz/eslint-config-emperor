// @ts-check

const fs = require('node:fs/promises');

const { getRules, paths } = require('./lib/config.cjs');
const { compareSnapshots, createChangelog } = require('./lib/changelog.cjs');

const [nextVersion] = process.argv.slice(2);

main();

async function main() {
	const latestSnapshot = await fs.readFile(paths.releaseSnapshot, { encoding: 'utf8' });
	const latestSnapshotJson = JSON.parse(latestSnapshot);
	const currentSnapshotJson = await getRules();

	await fs.writeFile(
		paths.releaseSnapshot,
		JSON.stringify(
			{
				version: nextVersion || null,
				presets: currentSnapshotJson,
			},
			null,
			2,
		),
	);
	const changes = compareSnapshots(latestSnapshotJson.presets, currentSnapshotJson);
	const changelog = createChangelog(changes);

	// Write changelog to stdout, it will be picked up by semantic-release
	console.log(changelog);
}
