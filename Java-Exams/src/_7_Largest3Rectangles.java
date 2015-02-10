import java.util.Scanner;

public class _7_Largest3Rectangles {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] inputArr = input.split("\\D+");
		int[] numbers = new int[(inputArr.length - 1)];

		for (int i = 1; i < numbers.length + 1; i++) {
			numbers[i - 1] = Integer.parseInt(inputArr[i]);
		}

		int[] couplesProduct = new int[numbers.length / 2];

		for (int i = 1, j = 1; i <= numbers.length / 2; i++, j += 2) {
			couplesProduct[i - 1] = numbers[j - 1] * numbers[j];
		}
		int biggest = 0;
		for (int i = 2; i < couplesProduct.length; i++) {
			if (couplesProduct[i - 2] + couplesProduct[i - 1]
					+ couplesProduct[i] > biggest) {
				biggest = couplesProduct[i - 2] + couplesProduct[i - 1]
						+ couplesProduct[i];
			}
		}
		System.out.println(biggest);
	}

}
