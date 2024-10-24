function are_isomorphic(graph1, graph2) {
    graph1Size = Object.keys(graph1).length;
    graph2Size = Object.keys(graph2).length;
    if (graph1Size != graph2Size) {
        return false;
    }
    for (i = 0; i < graph1Size; i++) {
        node1 = graph1[i];
        console.log("New Node 1")
        for (j = 0; j < graph2Size; j++) {
            result = nodeCompare(node1, graph2[j], j);
        }
    }

    return true;
}

function nodeCompare(node1, node2, j) {
    console.log("Node 1: ", node1);
    console.log("Node 2: ", node2);
    for (k = 0; k + j < node2.length; k++) {
        stack.push(node2[k + j]);
    }
    for (l = 0; l < j; l++) {
        stack.push(node2[l]);
    }
    console.log("Stack: ", stack);
    return;
}


var graph1 = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 0, 0]
];

var graph2 = [
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 0]
];

are_isomorphic(graph1, graph2);

