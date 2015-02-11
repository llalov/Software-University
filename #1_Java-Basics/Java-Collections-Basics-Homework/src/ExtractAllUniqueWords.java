import java.util.Scanner;
import java.util.Set;
import java.util.TreeSet;

public class ExtractAllUniqueWords {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine().toLowerCase();
		String[] wordsArr = text.split("\\W+");
		Set<String> uniqueWords = new TreeSet<>();

		for (String word : wordsArr) {
			uniqueWords.add(word);
		}

		for (String word : uniqueWords) {
			System.out.print(word + " ");
		}
	}

}
