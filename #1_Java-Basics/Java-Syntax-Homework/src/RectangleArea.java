import java.util.Scanner;

public class RectangleArea {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		int b = scanner.nextInt();
		scanner.close();
		
		int result = a*b;
		System.out.println("The area is: " + result);
	}

}
