import * as path from 'path';
import {test} from 'tap';
import * as fs from 'fs';
import {parseTree} from '../../lib/parse-gradle';

test('parse a simple dot notation output', async (t) => {
    const dump = fs.readFileSync(path.join(__dirname, 'graph.txt'), 'utf-8');
    const graph = parseTree(dump, true);
    t.equal(graph.ok, true, "parsing completes successfully");
    t.equal(graph.data.packageFormatVersion, "mvn:0.0.1", "parses as mvn:0.0.1 format");
    
    // top-level project
    t.equal(graph.data.name, "com.github.jitpack:subproj", "parses out root project name");
    t.equal(graph.data.version, "unspecified", "parses out root project version");
    t.equal(graph.data.dependencies !== undefined, true, "root project has dependencies");
    
    // first-order dependency
    const axis = graph.data.dependencies!["axis:axis"];
    t.equal(axis !== undefined, true, "first-order dependency was found");
    t.equal(axis.name, "axis:axis", "first-order dependency name parsed");
    t.equal(axis.version, "1.3", "first-order dependency version parsed");
    t.equal(axis.dependencies !== undefined, true, "first-order dependencies found");

    // transitive dependency
    const commonsDiscovery = axis.dependencies!["commons-discovery:commons-discovery"];
    t.equal(commonsDiscovery !== undefined, true, "transitive dependency was found");
    t.equal(commonsDiscovery.name, "commons-discovery:commons-discovery", "transitive dependency name parsed");
    t.equal(commonsDiscovery.version, "0.2", "transitive dependency version parsed");
    // console.log(JSON.stringify(parseTree(dump, true), null, 4));
});
