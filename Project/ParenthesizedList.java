package Project;

import java.util.LinkedList;
import java.util.Queue;

public class ParenthesizedList implements DFSActions<Vertex> {
    Queue<String> linked = new LinkedList<>();

    @Override
    public void processVertex(Vertex vertex) {
        linked.add(vertex.toString());
    }

    @Override
    public void descendVertex(Vertex vertex) {
        linked.add("(");
    }

    @Override
    public void ascendVertex(Vertex vertex) {
        linked.add(")");
    }

    @Override
    public void cycleDetected() {
        linked.add("*");
    }

    @Override
    public String toString() {
        String result = "( ";
        // result += "( ";
        while (linked.size() > 0) {
            String e = linked.peek();
            linked.remove();
            if (e == "(") {
                if (linked.peek() == ")") {
                    linked.remove();
                    // System.out.println(")");
                    continue;
                } else if (linked.peek() == "*") {
                    result += linked.peek() + " ";
                    linked.remove();
                    linked.remove();
                    // System.out.println("*");
                    continue;
                } else {
                    // System.out.println("else");
                }
            }
            result += e + " ";
        }

        return result+= ")\n";
    }
}
