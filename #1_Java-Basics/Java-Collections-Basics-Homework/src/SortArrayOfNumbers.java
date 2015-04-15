import java.util.Arrays;
import java.util.Scanner;

public class SortArrayOfNumbers {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		int[] numbers = new int[n];

		for (int i = 0; i < n; i++) {
			numbers[i] = scanner.nextInt();
		}
		scanner.close();
		Arrays.sort(numbers);

		for (Integer integer : numbers) {
			System.out.print(integer + " ");
		}
	}

}
