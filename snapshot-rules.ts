import { expect } from 'vitest';
import { table } from 'table';

expect.addSnapshotSerializer({
  test(value) {
    return value && Object.hasOwnProperty.call(value, 'rules');
  },
  serialize(value, config, indentation, depth, refs, printer) {
    const rules = table([
      ['Name', 'Config', 'Options'],
      ...Object.entries(value.rules).map(([name, config]) => {
        if (Array.isArray(config)) {
          return [name, config[0], config[1] ? JSON.stringify(config[1]) : ''];
        }
        return [name, config, ''];
      }),
    ]);

    delete value.rules;
    return `
${printer(value, config, indentation, depth, refs)}


Rules:

${rules}
`;
  },
});
