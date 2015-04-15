import java.util.Scanner;

public class LongestIncreasingSequence {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] numStr = input.split(" ");
		int[] numbersArr = new int[numStr.length];
		scanner.close();

		for (int i = 0; i < numbersArr.length; i++) {
			numbersArr[i] = Integer.parseInt(numStr[i]);
		}

		int counter = 0;
		int sequenceLength = 1;
		int endPosition = 0;

		System.out.print(numbersArr[0] + " ");
		for (int i = 1; i < numbersArr.length; i++) {
			if (numbersArr[i] > numbersArr[i - 1]) {
				System.out.print(numbersArr[i] + " ");
				counter++;
			} else {
				System.out.println();
				System.out.print(numbersArr[i] + " ");
				counter = 1;
			}
			if (counter > sequenceLength) {
				sequenceLength = counter;
				endPosition = i;
			}
		}
		int startPosition = endPosition - sequenceLength + 1;
		System.out.println();

		System.out.print("Longest: ");
		for (int i = startPosition; i < endPosition + 1; i++) {
			System.out.printf("%d ", numbersArr[i]);
		}
	}

}
