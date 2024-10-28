const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

var graph1 = [
    [0,1,1],
    [1,0,1],
    [1,0,0]
];

var graph2 = [
    [0,0,1],
    [1,0,1],
    [1,1,0]
];
// Isomorphic graphs, return true
assert(JSON.stringify(are_isomorphic(graph1, graph2)) == JSON.stringify(true));

var graph3 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 0, 0]
];

var graph4 = [
    [0, 0, 1],
    [1, 0, 1],
];
// Non-isomorphic, different sizes, return false
assert(JSON.stringify(are_isomorphic(graph3, graph4)) == JSON.stringify(false));

var graph5 = [
    [0, 0, 0],
    [1, 0, 0],
    [0, 0, 0]
];

var graph6 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
];
// Non-isomorphic, same size, different edges, return false
assert(JSON.stringify(are_isomorphic(graph5, graph6)) == JSON.stringify(false));

var graph7 = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0]
];

var graph8 = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 1, 0]
];
// Duplicate graphs, return true
assert(JSON.stringify(are_isomorphic(graph7, graph8)) == JSON.stringify(true));

var graph9 = [];
var graph10 = [];
assert(JSON.stringify(are_isomorphic(graph9, graph10)) == JSON.stringify(true));

var graph10 = {
    A: [0, 1, 0],
    B: [1, 0, 0],
    C: [0, 1, 0]
};

var graph11 = {
    E: [0, 1, 0],
    F: [1, 0, 0],
    G: [0, 1, 0]
}
// Duplicate graphs with differently named nodes
assert(JSON.stringify(are_isomorphic(graph10, graph11)) == JSON.stringify(true));

var graph12 = {
    'a':            [0, 1, 1],
    'differently':  [1, 0, 1],
    'named graph':  [1, 0, 0]
};

var graph13 = [
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 0]
];
// Isomorphic graphs with 1 containing named nodes and 1 containing unnamed nodes(array indexed)
assert(JSON.stringify(are_isomorphic(graph12, graph13) == JSON.stringify(true)));
