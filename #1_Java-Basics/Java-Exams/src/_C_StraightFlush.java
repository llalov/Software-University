import java.util.Scanner;

public class _C_StraightFlush {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] card = input.split("[, ]+");

		boolean found = false;

		for (int i = 0; i < card.length; i++) {
			for (int j = 0; j < card.length; j++) {
				for (int j2 = 0; j2 < card.length; j2++) {
					for (int k = 0; k < card.length; k++) {
						for (int k2 = 0; k2 < card.length; k2++) {
							// check for flush;
							if (gV(card[i]) == gV(card[j]) - 1) {
								if (gV(card[j]) == gV(card[j2]) - 1) {
									if (gV(card[j2]) == gV(card[k]) - 1) {
										if (gV(card[k]) == gV(card[k2]) - 1) {
											// check for straight;
											char hasToEnd = card[i]
													.charAt(card[i].length() - 1);
											String letter = hasToEnd + "";
											if (card[j].contains(letter)
													&& card[j2]
															.contains(letter)) {
												if (card[k].contains(letter)
														&& card[k2]
																.contains(letter)) {
													found = true;
													System.out.println("["
															+ card[i] + ", "
															+ card[j] + ", "
															+ card[j2] + ", "
															+ card[k] + ", "
															+ card[k2] + "]");
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if(!found) {
			System.out.println("No Straight Flushes");
		}
	}

	public static byte gV(String card) {
		if (card.contains("2")) {
			return 2;
		} else if (card.contains("3")) {
			return 3;
		} else if (card.contains("4")) {
			return 4;
		} else if (card.contains("5")) {
			return 5;
		} else if (card.contains("6")) {
			return 6;
		} else if (card.contains("7")) {
			return 7;
		} else if (card.contains("8")) {
			return 8;
		} else if (card.contains("9")) {
			return 9;
		} else if (card.contains("10")) {
			return 10;
		} else if (card.contains("J")) {
			return 11;
		} else if (card.contains("Q")) {
			return 12;
		} else if (card.contains("K")) {
			return 13;
		} else if (card.contains("A")) {
			return 14;
		} else {
			return -1;
		}
	}
}
