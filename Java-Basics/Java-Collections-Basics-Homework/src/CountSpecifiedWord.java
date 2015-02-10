import java.util.Scanner;

public class CountSpecifiedWord {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine().toLowerCase();
		String[] words = text.split("\\W+");
		String word = scanner.nextLine();
		int count = 0;
		for (String wrd : words) {
			if (wrd.equals(word)) {
				count++;
			}
		}
		System.out.println(count);

	}

}
