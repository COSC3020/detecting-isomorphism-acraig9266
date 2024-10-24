function are_isomorphic(graph1, graph2) {
    nodesMatched = 0;
    graph1Size = Object.keys(graph1).length;
    graph2Size = Object.keys(graph2).length;
    if (graph1Size != graph2Size) {
        return false;
    }
    for (i = 0; i < graph1Size; i++) {
        node1 = graph1[i];
        for (j = 0; j < graph2Size; j++) {
            node2 = graph2[j].slice();
            result = nodeMatch(node1, node2, i, j);
            if (result == true) {
                graph2[j] = "matched";
                nodesMatched++;
            }
        }
    }
    return (nodesMatched == graph2Size);
}

function nodeMatch(node1, node2, i, j) {
    if (node2 == undefined) {
        return false;
    }
    if (i != j) {
        node2 = swap(node2, i, j)
    }
    for (k = 0; k < node1.length; k++) {
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
