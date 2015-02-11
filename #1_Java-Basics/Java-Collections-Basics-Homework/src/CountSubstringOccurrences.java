import java.util.Scanner;

public class CountSubstringOccurrences {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine().toLowerCase();
		String subString = scanner.nextLine().toLowerCase();
		int count = count(text, subString);
		System.out.println(count);
	}

	public static int count(String string, String substring) {
		int count = 0;
		int fromIndex = 0;
		while ((fromIndex = string.indexOf(substring, fromIndex)) != -1) {
			count++;
			fromIndex++;
		}
		return count;
	}

}
