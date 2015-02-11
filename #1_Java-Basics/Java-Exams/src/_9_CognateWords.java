import java.util.HashSet;
import java.util.Scanner;


public class _9_CognateWords {

	public static void main(String[] args) {
		Scanner scanner = new Scanner (System.in);
		String input = scanner.nextLine();
		String[]tokens = input.split("\\W+");
		
		HashSet<String> cognateWords = new HashSet<>();
		for (int i = 0; i < tokens.length; i++) {
			for (int j = 0; j < tokens.length; j++) {
				for (int j2 = 0; j2 < tokens.length; j2++) {
					
					if(i != j) {
						boolean check  = (tokens[i]+tokens[j]).equals(tokens[j2]);
						if(check) {
							cognateWords.add(tokens[i]+"|"+tokens[j]+"="+tokens[j2]);
						}
					}
				}
			}
		}
		if(cognateWords.isEmpty()) {
			System.out.println("No");
		}
		else {
			for (String string : cognateWords) {
				System.out.println(string);
			}
		}
	}

}
