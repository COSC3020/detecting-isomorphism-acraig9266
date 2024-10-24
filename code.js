function are_isomorphic(graph1, graph2) {
    graph1Size = Object.keys(graph1).length;
    graph2Size = Object.keys(graph2).length;
    if (graph1Size != graph2Size) {
        return false;
    }
    for (i = 0; i < graph1Size; i++) {
        node1 = graph1[i];
        //console.log("New Node 1")
        for (j = 0; j < graph2Size; j++) {
            node2 = graph2[j].slice();
            console.log(node2);
            result = nodeMatch(node1, node2, i, j);
            //console.log("Graph 1: ", graph1);
            //console.log("Graph 2: ", graph2)
            console.log(result);
        }
    }
    return true;
}

function nodeMatch(node1, node2, i, j) {
    //console.log("Node 1: ", node1);
    //console.log("Node 2: ", node2);
    //console.log(node2);
    //console.log(swappedNode);
    if (i != j) {
        node2 = swap(node2, i, j)
    }
    //console.log("New Node 2: ", node2);
    for (k = 0; k < node1.length; k++) {
        //console.log(node1[k], node2[k]);
        if (node1[k] != node2[k]) {
            return false;
        }
    }
    return true;
}

function swap(node, i, j) {
    tmp = node[i];
    node[i] = node[j]
    node[j] = tmp;
    return node;
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
