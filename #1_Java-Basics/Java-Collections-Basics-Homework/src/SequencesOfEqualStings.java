import java.util.Scanner;

public class SequencesOfEqualStings {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		String input = scanner.nextLine();
		String[] str = input.split(" ");
		scanner.close();

		System.out.print(str[0]);
		for (int i = 1; i < str.length; i++) {
			if (str[i].equals(str[i - 1])) {
				System.out.print(" " + str[i]);
			} else {
				System.out.println();
				System.out.print(str[i]);
			}
		}
	}

}
