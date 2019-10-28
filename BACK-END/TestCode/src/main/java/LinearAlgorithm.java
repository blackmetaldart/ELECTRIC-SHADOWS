public class LinearAlgorithm {

    int arr []= {1,3,5,7,9};

    int x = 12;
    int n = arr.length-1;
    int lower = 0;
    int upper = n;

    while(upper >= lower){
        if (upper < lower){
            return -1;
        }

        int mid = lower + (upper-lower)/2;

        if (arr[mid] < x) {
            lower = mid+1;
        }

        if (arr[mid] > x) {
            upper = mid -1;
        }

        if (arr[mid] == x) {
            return "x found at location " + mid;
        }



    }
}
