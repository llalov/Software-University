import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;


public class RandomHandsOf5Cards {

	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		int n = scanner.nextInt();
		scanner.close();
		
		String[] ranks = {"2","3","4","5","6","7","8","9","10","J","Q","K","A"};
		String[] suits = {"\u2663","\u2666","\u2764","\u2660"};
		
		ArrayList<Card> deckOfCards = new ArrayList<Card>();
		
		for (int i = 0; i < ranks.length ; i++) {
			for (int j = 0; j < suits.length ; j++) {
				deckOfCards.add(new Card(ranks[i],suits[j]));
			}
			
		}
		
		for (int i = 0; i < n; i++){
			for (int j = 0; j < 5; j++) {
				Random rand = new Random();
				int randNum = rand.nextInt(deckOfCards.size());
				System.out.printf("%s ",deckOfCards.get(randNum).showCard());
			}
			System.out.println();
		}
		
	}
}
