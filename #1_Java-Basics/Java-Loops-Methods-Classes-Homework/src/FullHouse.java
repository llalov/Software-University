import java.util.ArrayList;

import org.omg.Messaging.SyncScopeHelper;


@SuppressWarnings("unused")
public class FullHouse {

	public static void main(String[] args) {
		
		// 2 arrays containing the ranks and suits of 52 card deck.
		String[] ranks = {"2","3","4","5","6","7","8","9","10","J","Q","K","A"};
		String[] suits = {"\u2663","\u2666","\u2764","\u2660"};
		// assign array list for 52 cards deck.
		//ArrayList<Card> deckOfCards = new ArrayList<Card>();
		// counter.
		int counter = 0;
		//fill deckOfCards[] array,  with objects called "Card"s containing "rank"s and "suit"s. 
		//for (int i = 0; i < ranks.length ; i++) {
			//for (int j = 0; j < suits.length ; j++) {
				//deckOfCards.add(new Card(ranks[i],suits[j]));			
				for (int f = 0; f <=12; f++) { 
		        	for (int i = 0; i <=1; i++) {
		              	for (int j = i+1; j <=2; j++) {
		              		for (int k = j+1; k <=3; k++) {
		              			for (int s = 0; s <= 12; s++) {
		              				if(s!=f){
		              					for(int i1=0;i1<=2;i1++){
		              						for (int j1 = i1+1; j1 <=3; j1++) {
		              							System.out.printf("%s%s%s%s%s%s%s%s%s%s",
		              									ranks[f],suits[i],
		              									ranks[f],suits[j],
		              									ranks[f],suits[k],
		              									ranks[s],suits[i1],
		              									ranks[s],suits[j1]);
		              							System.out.println();
		              							counter++;
		              						}
		              					}
		              				}
		              			}
		              		}
		              	}
		        	}
				}			
				System.out.println(counter);
		}
	}
//
//public static void main(String[] args) {
//	String[] faces = { "2", "3", "4", "5", "6", "7", "8", "9", "10", "J",
//			"Q", "K", "A" };
//	String[] suits = { "\u2665", "\u2666", "\u2663", "\u2660" };
//	int hands = 0;
//
//	//itterate through all faces
//	for (int f1 = 0; f1 < faces.length; f1++) {
//		for (int f2 = 0; f2 < faces.length; f2++) {
//			for (int s1 = 0; s1 < suits.length; s1++) {
//				for (int s2 = s1 +1; s2 < suits.length; s2++) {
//					for (int s3 = s2 +1; s3 < suits.length; s3++) {
//						for (int s4 = 0; s4 < suits.length; s4++) {
//							for (int s5 = s4 +1; s5 < suits.length; s5++) {
//								//remove duplicates
//								if(f1 != f2) {
//									
//									//print as such:
//									//first 3 faces are the same, but with different suits
//									//last 2 faces are the same and again with different suits
//									System.out.printf("%s%s %s%s %s%s %s%s %s%s \n",
//											faces[f1], suits[s1], faces[f1],
//											suits[s2], faces[f1], suits[s3], faces[f2],suits[s4], faces[f2],suits[s5]);
//									hands++;
//								}
//								
//							}
//						}
//
//					}
//				}
//
//			}
//
//		}
//		
//	}
//	System.out.println(hands + " full houses");
//}
//}
//
