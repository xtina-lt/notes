<h2 align="center" id="searching">Searching and Sorting👀</h2>
<table align="center">
<tr>
    <td>
        Time
    </td>
    <td>
        Level
    </td>
</tr>
<tr>
    <td>
        O(1)
    </td>
    <td>
        Excellent
    </td>
</tr>
<tr>
    <td>
        O(log<sub>N</sub>)
    </td>
    <td>
        Good
    </td>
</tr>
<tr>
    <td>
        O(N)
    </td>
    <td>
        Fair
    </td>
</tr>
<tr>
    <td>
        O(N<sup>2</sup>)
    </td>
    <td>
        Poor (Bubble)
    </td>
</tr>
</table>

<table align="center">
<tr>
<td>
<h3>Linear Search

- Sequential search order
- Time complexity based on # of elements
- Time Complexity: O(N)</h3>
</td>
<td>

```java
// linear(new String[]{"Alaska", "Ireland", "Niagra Falls"}, "Ireland")
public static int linear(String[] arr, String key){
    int result = -1;
    for (String e : arr){
        if (e == key) {
            result = 1;
            break;
        }
    }
    return result; // 1
}
```

</td>
</tr>
<tr>
<td>
<img style="border-radius:80%; filter:grayscale(.6); opacity: .7;" src="./images/sequential-search.gif"/>



<h3>Binary Search

- Array MUST BE SORTED
- Recursive
- Time Complexity: O(log<sub>N</sub>)
- Faster</h3>
</td>
<td>

```java
// binarySearch(new int[]{1,2,3,4,5,6,7,8,9}, 2) 
public static int binarySearch(int arr[], int key){  
    int first = 0;
    int last = arr.length;
    int mid = (first + last)/2;  

    while( first <= last ){  

        if ( arr[mid] < key ){  
            first = mid + 1;     
        }else if ( arr[mid] == key ){  
            break;  
        }else{  
            last = mid - 1;  
        }  
        mid = (first + last)/2; 

    }  
    // return -1 if not found, or found
    return ( first > last ) ? -1 : mid;
}
```
</td>
<tr>
<td>
</td>
<td>
<img style="border-radius:2vw; filter:grayscale(.6); opacity: .7;" src="./images/binary-search.gif">
</td>
</tr>


<tr>
<td>
<h2>Bubble Sort</h2>

- Double for loop
- Swaps out larger element
- Time Complexity: O(N<sup>2</sup>)
<img style="border-radius:80%; filter:grayscale(.6); opacity: .7" src="./images/bubble-sort.gif"/>
</td>
<td>

```java
// linear(new String[]{"Alaska", "Ireland", "Niagra Falls"}, "Ireland")
// bubble_sort(new int[]{3,4,2,1,9,9,7,6,5}) ;
public static void bubble_sort(int[] arr){
    int temp = 0;
    for (int j = arr.length-1; j > 1; j--){
        for( int i= 0; i < j; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }

    }
    // 123456799
}
```

</td>
</tr>

<tr>
<td>
<h3>Selection Sort</h2>

- Improvement on bubbe sort
- Reduces # of swaps
- Less memory
- Time Complexity: O(N<sup>2</sup>)
<img style="border-radius:2vw; filter:grayscale(.6); opacity: .7" src="./images/selection-sort.gif/">
</td>
<td>

```java
// linear(new String[]{"Alaska", "Ireland", "Niagra Falls"}, "Ireland")
//selection_sort(new int[]{3,4,2,1,9,9,7,6,5}) 
public static void selection_sort(int[] arr){
    // forward loop
    for (int i = 0; i < arr.length-1; i++){
        int min = i;
        for(int j = i+1; j < arr.length; j++){
            //if left is greater than right, swap
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // swap
        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        
    }
    // 123456799
}
```
</td>
</tr>

<tr>
<td>
<h2>Insertion Sort</h2>

- somewhat the best
- twice as fast as bubble
- Time Complexity: O(N<sup>2</sup>)
<img style="border-radius:80%; filter:grayscale(.6); opacity: .7" src="./images/insertion-sort.gif">
</td>
<td>

```java
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
         // 123456799
    }
```
</td>
</tr>
</table>
