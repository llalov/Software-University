import java.util.Scanner;

public class Exam2 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		String[] input = scanner.nextLine().split("[ ]+");
		float result = 0;

		for (int i = 0; i < input.length; i++) {
			String firstChar = input[i].substring(0, 1);
			String secondChar = input[i].substring(input[i].length() - 1);
			String numToChar = input[i].substring(1, input[i].length() - 1);

			int num = Integer.parseInt(numToChar);
			double valueFirstChar = (char) firstChar.charAt(0);
			double valueSecondChar = (char) secondChar.charAt(0);

			if (isUpper(valueFirstChar)) {
				if (isUpper(valueSecondChar)) {
					result += (num / (valueFirstChar - 64));
					result -= (valueSecondChar - 64);

				} else if (!isUpper(valueSecondChar)) {
					result += (num / (valueFirstChar - 64));
					result += (valueSecondChar - 96);

				}
			} else if (!isUpper(valueFirstChar)) {
				if (!isUpper(valueSecondChar)) {
					result += (num * (valueFirstChar - 96));
					result += (valueSecondChar - 96);

				} else if (isUpper(valueSecondChar)) {
					result += (num * (valueFirstChar - 96));
					result -= (valueSecondChar - 64);

				}
			}

		}
		System.out.printf("%.2f", result);

	}

	public static boolean isUpper(double character) {
		boolean isUpper = false;
		if (character < 97) {
			isUpper = true;
		}
		return isUpper;

	}
}
