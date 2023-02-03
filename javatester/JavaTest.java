package javatester;
public class JavaTest {
    // insertion_sort(new int[]{3,4,2,1,9,9,7,6,5})
    public static void insertion_sort(int[] arr)    {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
     
    public static void main(String[] args) {
        // System.out.println( bubble(new String[]{"Alaska", "Ireland", "Niagra Falls"}, "Ireland") );
        insertion_sort(new int[]{3,4,2,1,9,9,7,6,5}) ;
    }
}
