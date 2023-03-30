package Project;

public interface DFSActions<V> {

    public void processVertex(V vertex);
    public void descendVertex(V vertex);
    public void ascendVertex(V vertex);
    public void cycleDetected();

}
