import java.util.Scanner;
import java.util.TreeMap;

public class MostFrequentWord {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine().toLowerCase();
		String[] words = text.split("\\W+");
		TreeMap<String, Integer> frequenceWord = new TreeMap<>();
		int maxCount = 0;

		for (String word : words) {
			Integer counter = frequenceWord.get(word);
			if (counter == null) {
				counter = 0;
			}
			if (counter + 1 > maxCount) {
				maxCount = counter + 1;

			}
			frequenceWord.put(word, counter + 1);
		}

		for (String key : frequenceWord.keySet()) {
			if (frequenceWord.get(key) == maxCount) {
				System.out.printf("%s -> %d times \n", key, maxCount);
			}
		}
	}

}
