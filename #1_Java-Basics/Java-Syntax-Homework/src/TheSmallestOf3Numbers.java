import java.util.Arrays;
import java.util.Scanner;


public class TheSmallestOf3Numbers {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		double[] array = new double[3];
		
		for (int i = 0; i < 3; i++) {
			array[i] = scanner.nextDouble();
		}
		scanner.close();
		
		Arrays.sort(array);
		System.out.println(array[0]);
		}
	}


