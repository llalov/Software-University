import java.util.Scanner;

public class CountAllWords {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] words = input.split("\\W+");
		int count = words.length;
		System.out.println(count);
	}

}
