package Project;

import java.util.ArrayList;

public class DirectedGraph extends Graph<Vertex> {
    public void addEdge(String u, String v) {

        ArrayList<Vertex> list = adjacencyList.get(getVertex(u));

        if (list == null) list = new ArrayList<>();

        list.add(getVertex(v));
        adjacencyList.put(getVertex(u), list);
    }

    public Vertex getVertex(String u) {

        if (!vertices.containsKey(u)) vertices.put(u, new Vertex(u));

        return vertices.get(u);
    }

}