import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractEmails {
	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		String text = scanner.nextLine();
		Pattern emailPattern = Pattern
				.compile("([_A-Za-z0-9-]+)(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})");
		Matcher matcher = emailPattern.matcher(text);
		while (matcher.find()) {
			System.out.println(matcher.group());
		}

	}

}
// Regular Expression Description
// \d Any digit, short for [0-9]
// \D A non-digit, short for [^0-9]
// \s A whitespace character, short for [ \t\n\x0b\r\f]
// \S A non-whitespace character, short for [^\s]
// \w A word character, short for [a-zA-Z_0-9]
// \W A non-word character [^\w]
// \S+ Several non-whitespace characters
// \b Matches a word boundary where a word character is [a-zA-Z0-9_].

