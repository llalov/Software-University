import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Scanner;

public class _8_CouplesFrequency {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] inputArr = input.split(" ");
		int[] numbers = new int[inputArr.length];

		for (int i = 0; i < inputArr.length; i++) {
			numbers[i] = Integer.parseInt(inputArr[i]);
		}
		LinkedHashMap<String, Integer> couplesFreq = new LinkedHashMap<>();

		for (int i = 1; i < numbers.length; i++) {
			String couple = (numbers[i - 1] + " " + numbers[i]);
			Integer counter = couplesFreq.get(couple);
			if (counter == null) {
				counter = 0;
			}
			couplesFreq.put(couple, counter + 1);
		}

		for (String key : couplesFreq.keySet()) {
			float frequency = (float) couplesFreq.get(key)
					/ (numbers.length - 1);
			System.out.printf("%s -> %.2f%%\n", key, (frequency * 100));
		}

	}
}
