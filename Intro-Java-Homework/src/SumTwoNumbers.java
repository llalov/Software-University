import java.util.Scanner;


public class SumTwoNumbers {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int firstNum = scanner.nextInt();
		int secondNum = scanner.nextInt();
		int result = firstNum + secondNum;
		scanner.close();
		System.out.println("Result: "+result);
		
	}

}
