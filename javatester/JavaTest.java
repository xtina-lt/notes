package javatester;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Stack;

public class JavaTest{

    public static void studyQueue() {
        // # CREATE!!
        Queue<String> q = new LinkedList<>();
        q.add("Alaska");
        q.add("Ireland");
        q.add("Niagra Falls");
        // [Alaska, Ireland, Niagra Falls]
        System.out.println(q);
        // length
        System.out.println( q.size() ); // 3
        // # READ!!
        // READ index value
        // retrieves but does not remove head of que);
        System.out.println( q.peek() ); // Alaska
        // Retrieves, but does not remove, the head of this queue. 
        // throws an exception if this queue is empty.
        System.out.println( q.element() );
        // contains Obj ? true : false
        System.out.println( q.contains("Alaska") );
        // # DELETE!!
        // Retrieves and removes the head of this queue, 
        // or returns null if this queue is empty.
        // FIFO
        System.out.println( q.poll() ); // ALASKA
        // Retrieves and removes SPECIFIC or head
        // throws exception if empty
        System.out.println( q.remove("Alaska") ); // false
        System.out.println( q.remove() ); // ireland

        // LOOPING
        for (String e : q) System.out.println(e);

        // # ONE LINE INITIALIZATION
        Queue<String> qOneLine = new LinkedList<>( Arrays.asList("You", "are", "awesome") );
        // [You, are, awesome]
        System.out.println(qOneLine);
    }

    public static void studyStack(){
        // # CREATE!!
        Stack<String> s = new Stack<String>();
        s.add("Alaska");
        s.add("Ireland");
        s.add("Niagra Falls");
        // [Alaska, Ireland, Niagra Falls]
        System.out.println(s);
        // length
        System.out.println( s.size() );
        // # READ!!
        // READ LAST
        System.out.println( s.peek() ); //Niagra Falls
        // READ FIRST
        System.out.println( s.firstElement() );
        // READ BY INDEX
        System.out.println( s.get(0) ); // Alaska
        // contains Obj ? true : false
        System.out.println( s.contains("Alaska") );
        // checks if (present) ? index : -1
        System.out.println( s.indexOf("Alaska") ); // 0
        // # UPDATE !!
        s.set(0, "Alaska!");
        // [Alaska!, Ireland, Niagra Falls]
        System.out.println(s);
        //  # DELETE !!
        // SAVES and REMOVES last, thows error
        System.out.println( s.pop() ); // Niagra Falls
        // removes first if present
        // (if there) ? true : false
        System.out.println( s.remove("Alaska") ); // false
        

        // LOOPING
        for (String e : s) System.out.println(e);

        // # ONE LINE INITIALIZATION
        Stack<String> sSuper = new Stack<>();
        sSuper.addAll(0, Arrays.asList("You", "are", "awesome"));
        // [You, are, awesome]
        System.out.println(sSuper);
    }
    public static void main(String[] args) {
        studyQueue();
        // studyStack();
    }
}