import java.util.Scanner;


public class CountOfEqalBitPairs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner =  new Scanner(System.in);
		
		int n = scanner.nextInt();
		String binary = Integer.toString(n,2);
		int count = 0;
		scanner.close();
		for (int i = 0; i<binary.length()-1; i++) {
			if(binary.charAt(i)==binary.charAt(i+1)) {
				count++;
			}		
		}
		System.out.println("Binary: " + binary);
		System.out.println("Count sequences of two equal bits: " + count);
		}
	}

