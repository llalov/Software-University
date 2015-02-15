import java.util.Scanner;

public class Substring {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		String text = input.nextLine();
		int jump = Integer.parseInt(input.nextLine());

		// char search = 'р';
		boolean hasMatch = false;

		for (int i = 0; i < text.length(); i++) {

			if (text.charAt(i) == 'p') { // replace "search" with the char 'p';
				hasMatch = true;

				int endIndex = jump;

				if (jump == 0) { // added if statement in case jump = 0;
					endIndex = i;
					String matchedString = text.substring(i, endIndex + 1);
					System.out.println(matchedString);
					i += jump;
					continue;
				}

				if (endIndex > text.length()) {
					endIndex = text.length();
				}

				if (i < text.length() - jump) { // added if/else if statement;
					String matchedString = text.substring(i, i + endIndex + 1); // added
																				// to
																				// endIndex
																				// i+1;
					System.out.println(matchedString);
					i += jump;
				} else if (i >= text.length() - jump) {
					System.out.println(text.substring(i, text.length()));
				}

			}
		}
		if (!hasMatch) {
			System.out.println("no");
		}

	}

}
