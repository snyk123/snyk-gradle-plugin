import * as path from 'path';
import {test} from 'tap';
import * as fs from 'fs';
import {parseTree} from '../../lib/parse-gradle';

test('parse a simple dot notation output', async (t) => {
    const dump = fs.readFileSync(path.join(__dirname, 'graph.txt'), 'utf-8');
    console.log(JSON.stringify(parseTree(dump, true), null, 4));
});
