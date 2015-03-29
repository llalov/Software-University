import java.util.Scanner;


public class CountOfBitsOne {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		int num = scanner.nextInt();
		scanner.close();
		int result = Integer.bitCount(num);
		
		System.out.println("Count of bits: "+result);
	}

}
