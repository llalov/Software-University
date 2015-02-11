import java.util.Scanner;

public class _1_DozenEggs {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		String[] EggsArr = new String[2];
		int countDozens = 0;
		int countEggs = 0;
		for (int i = 0; i < 7; i++) {
			String input = scanner.nextLine();
			EggsArr = input.split(" ");
			if (EggsArr[1].equals("dozens")) {
				countDozens += Integer.parseInt(EggsArr[0]);
			} else if (EggsArr[1].equals("eggs")) {
				countEggs += Integer.parseInt(EggsArr[0]);
			}
		}
		int addedDozens = 0;
		double addedEggs = 0;
		if (countEggs >= 12) {
			addedDozens = countEggs / 12;
			countDozens += addedDozens;
			addedEggs = (countEggs / 12) - addedDozens;
			countEggs += addedEggs;
			countEggs -= (addedDozens * 12);
		}
		System.out.printf("%d dozens + %d eggs", countDozens, countEggs);
	}

}
