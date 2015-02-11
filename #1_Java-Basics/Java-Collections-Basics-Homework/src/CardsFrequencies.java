import java.util.Scanner;
import java.util.TreeMap;

public class CardsFrequencies {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		String[] cardFaces = input.split("[ ♣♦♥♠]+");
		TreeMap<String, Double> cardsMap = new TreeMap<>();

		for (String cardFace : cardFaces) {
			Double count = cardsMap.get(cardFace);
			if (count == null) {
				count = 0d;
			}
			cardsMap.put(cardFace, count + 1);
		}
		for (String card : cardsMap.keySet()) {
			System.out.printf("%s -> %.2f%%\n", card,
					((cardsMap.get(card) / cardFaces.length) * 100));
		}
	}

}
