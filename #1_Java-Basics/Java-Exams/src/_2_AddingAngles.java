import java.util.Scanner;

public class _2_AddingAngles {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		scanner.nextLine();
		String input = scanner.nextLine();
		String[] strNumArr = input.split(" ");
		int[] numbers = new int[n];

		for (int i = 0; i < numbers.length; i++) {
			numbers[i] = Integer.parseInt(strNumArr[i]);
		}
		boolean found = false;
		for (int i = 0; i < numbers.length - 2; i++) {
			for (int j = i + 1; j < numbers.length - 1; j++) {
				for (int j2 = j + 1; j2 < numbers.length; j2++) {
					int result = (numbers[i] + numbers[j] + numbers[j2]);
					if (result % 360 == 0) {
						found = true;
						System.out.println(numbers[i] + " + " + numbers[j]
								+ " + " + numbers[j2] + " = " + result
								+ " degrees");
					}
				}
			}
		}
		if (!found) {
			System.out.println("No");
		}
	}

}
