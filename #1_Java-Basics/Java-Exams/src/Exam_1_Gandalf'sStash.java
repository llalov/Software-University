import java.util.Scanner;

public class Exam {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int moodLevel = Integer.parseInt(scanner.nextLine());
		String input = scanner.nextLine();
		String[] foods = input.trim().toLowerCase().split("\\W+");

		for (int i = 0; i < foods.length; i++) {
			moodLevel += giveValue(foods[i]);
		}

		if (moodLevel < -5) {
			System.out.println(moodLevel);
			System.out.println("Angry");
		} else if ((moodLevel >= -5) && (moodLevel < 0)) {
			System.out.println(moodLevel);
			System.out.println("Sad");
		} else if (moodLevel >= 0 && moodLevel <= 15) {
			System.out.println(moodLevel);
			System.out.println("Happy");
		} else if (moodLevel > 15) {
			System.out.println(moodLevel);
			System.out.println("Special JavaScript mood");
		}

	}

	public static byte giveValue(String food) {

		switch (food) {
		case "cram":
			return 2;
		case "lembas":
			return 3;
		case "apple":
			return 1;
		case "melon":
			return 1;
		case "honeycake":
			return 5;
		case "mushrooms":
			return -10;
		default:
			return -1;
		}
	}
}
