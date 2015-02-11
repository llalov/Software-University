import java.util.Scanner;

public class DecimalToHexadecimal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Enter decimal number: ");
		int num = scanner.nextInt();
		scanner.close();
		
		String str = Integer.toHexString(num);
		System.out.println("Hexadecimal value: "+ str.toUpperCase());
	}

}
