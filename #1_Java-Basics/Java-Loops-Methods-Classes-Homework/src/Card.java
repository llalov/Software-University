

public class Card {
	
	private String rank;
	private String suit;
	
		
	public Card(String rank, String suit) {
		super();
		this.rank = rank;
		this.suit = suit;
	}
	public String getRank() {
		return rank;
	}
	
	public String getSuit() {
		return suit;
	}
	public String showCard() {
		return rank + suit;
	}
	}
	

	