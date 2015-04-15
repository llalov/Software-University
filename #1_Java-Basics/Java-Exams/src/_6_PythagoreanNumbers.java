import java.util.Arrays;
import java.util.Scanner;

public class _6_PythagoreanNumbers {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int n = Integer.parseInt(scanner.nextLine());
		int[] numbers = new int[n];

		for (int i = 0; i < n; i++) {
			int num = Integer.parseInt(scanner.nextLine());
			numbers[i] = num * num;
		}
		Arrays.sort(numbers);
		boolean found = false;
		for (int i = 0; i < numbers.length - 1; i++) {
			for (int j = i; j < numbers.length; j++) {
				for (int j2 = j; j2 < numbers.length; j2++) {
					if (numbers[i] + numbers[j] == numbers[j2]) {
						int a = (int) Math.sqrt(numbers[i]);
						int b = (int) Math.sqrt(numbers[j]);
						int c = (int) Math.sqrt(numbers[j2]);
						found = true;
						System.out.println(a + "*" + a + " + " + b + "*" + b
								+ " = " + c + "*" + c);
					}

				}

			}
		}
		if (!found) {
			System.out.println("No");
		}
	}

}
