import java.util.Arrays;
import java.util.Scanner;


public class SortArrayOfString {

	public static void main(String[] args) {
		
		 Scanner scanner = new Scanner(System.in);
		 int n = scanner.nextInt();
		 String str;
		 String[] cities = new String[n];
		 
		 for (int i = 0; i < n; i++) {
			str = scanner.next();
			cities[i] = str;
		}
		 scanner.close();
		 Arrays.sort(cities);
		 for(String city : cities){
			 System.out.println(city);
		 }
		 
	}

}
