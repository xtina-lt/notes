package Project;

import java.util.LinkedList;
import java.util.Queue;

public class Hierarchy implements DFSActions<Vertex> {
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
        String result = "";
        int count = 0;
        while (linked.size() > 0) {
            String e = linked.peek();
            linked.remove();
            if (e == "(") {
                if (linked.peek() == ")") {
                    linked.remove();
                    continue;
                } else if (linked.peek() == "*") {
                    result += linked.peek() + " ";
                    linked.remove();
                    linked.remove();
                    continue;
                }
            }
            
            if (e == "(") count++;
            else if (e == ")") --count;


            if (e == "(" || e == ")") continue;
            if (e != "*") result += "\n";

            for (int i = 0; i < count; i++) {
                result += "\t";
            }

            result += e + " ";
        }

        return result += "\n";
    }

    private boolean isAlpha(String str) {
        return str != "(" && str != ")";
    }

}
