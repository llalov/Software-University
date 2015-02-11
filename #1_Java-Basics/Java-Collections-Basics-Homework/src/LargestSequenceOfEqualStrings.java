import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public final class LargestSequenceOfEqualStrings {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] strArr = input.split(" ");
		scanner.close();

		Map<String, Integer> counters = new TreeMap<>();

		for (String token : strArr) {
			Integer count = counters.get(token);
			if (count == null) {
				count = 0;
			}
			counters.put(token, count + 1);
		}

		String theToken = "";
		int maxEntry = 0;

		for (String key : counters.keySet()) {
			if (counters.get(key) > maxEntry) {
				maxEntry = counters.get(key);
				theToken = key;
			}
		}
		for (int i = 0; i < maxEntry; i++) {
			System.out.printf("%s ", theToken);
		}
	}

}
