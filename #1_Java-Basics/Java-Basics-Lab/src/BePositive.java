import java.util.ArrayList;
import java.util.Scanner;

public class BePositive {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner scn = new Scanner(System.in);		
		int countSequences = Integer.parseInt(scn.nextLine());
			
		for (int i = 0; i < countSequences; i++) {
			String[] input = scn.nextLine().trim().split(" "); 
			ArrayList<Integer> numbers = new ArrayList<>();		
			for (int j = 0; j < input.length; j++) {
				if (!input[j].equals("")) {
					int num = Integer.parseInt(input[j]);   	  // changed i with j;
					numbers.add(num);		
				}
			  }
		  
			boolean found = false;
			
			for (int j = 0; j < numbers.size(); j++) {				
				int currentNum = numbers.get(j);
				
				if (currentNum >= 0) {
					System.out.printf("%d%s", currentNum, j == numbers.size() - 1 ? "\n" : " ");//changed places of "\n" and " ";
					found = true;
				} else if (j != numbers.size() - 1) { 			  //added elseif to do nothing when j = is the last of the loop;
					currentNum += numbers.get(j + 1);					
					j++;										  // added j++ to skip the number after the negative;
					if (currentNum >= 0) {
						System.out.printf("%d%s", currentNum, j == numbers.size() - 1 ? "\n" : " ");//changed places of "\n" and " ";
						found = true;
					}					
				}
			}		
			if (!found) {
				System.out.println("(empty)");
			} 						
		}
	}

}
