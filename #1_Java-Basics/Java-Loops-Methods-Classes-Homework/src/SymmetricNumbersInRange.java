import java.util.Scanner;


public class SymmetricNumbersInRange {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		int start = scanner.nextInt();
		int end = scanner.nextInt();
		scanner.close();
		
		for (int i = start; i<=end; i++) {
			if ( i < 10) {
				System.out.print(i+ " ");
			}
			else if (10 <= i && i <= 99 ) {
				int firstInt = i / 10;
				int lastInt = i % 10;
				if (firstInt == lastInt) {
					System.out.print(i+ " ");
				}
				
				}
			
			else if (100 <= i && i <= 999) {
				int firstInt = i / 100;
				int lastInt = (i % 100) % 10;
				if (firstInt == lastInt) {
					System.out.print(i+ " ");
				}
			}
			
		}
		}
}

