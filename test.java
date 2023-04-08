// CMSC 335 - WEEK 3 - Interface Discussion - Torres
// Abstraction can be done via interfaces
// represent the IS-A relationship
// blueprint of a class
// static and abstract constaints

import java.io.*;
import java.util.*;

// the Compareable itnerface compares two values
class Friends implements Comparable<Friends> {
    String x;
    String y;
 
    public Friends(String x, String y){
        this.x = x;
        this.y = y;
    }
    
    // overrride compare to
    @Override public int compareTo(Friends e){
        //        check x                          check y                      Not Same/Same
        return ( (this.x.compareTo(e.x) != 0) && (this.y.compareTo(e.y) != 0) ) ? -100 : 100 ;
    }

    public static void main(String[] args) {
        Friends a = new Friends("Water", "Houseplant");
        Friends b = new Friends("Water", "Houseplant");
        Friends c = new Friends("Banana", "Apple");
        System.out.printf("Result should be 100: %d\n", a.compareTo(b) );
        System.out.printf("Result should be  -100: %d\n", a.compareTo(c) );
    }
}
 
