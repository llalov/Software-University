import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class _D_Pyramid {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		int n = Integer.parseInt(scanner.nextLine().trim());
		
		int firstNum = Integer.parseInt(scanner.nextLine().trim());
		ArrayList<Integer> finalNum = new ArrayList<>();
		finalNum.add(firstNum);
		int searchedNum = firstNum;
		
		for (int i = 1; i < n; i++) {
			int[] numbers = new int[i+1];
			for (int j = 0; j <= i; j++) {
				numbers[j] = scanner.nextInt();
			}
			boolean found = false;
			Arrays.sort(numbers);
			for(int j2 = 0; j2 < numbers.length; j2++) {
			if(numbers[j2] > searchedNum) {
				searchedNum = numbers[j2];
				finalNum.add(numbers[j2]);
				found = true;
				break;
			}
			}
			if (!found)  {
				searchedNum += 1;
			}
			
		}
		String outPut = "";
		for (Integer integ : finalNum) {
			outPut += integ+", ";
		}
		System.out.println(outPut.substring(0,outPut.length()-2));
	}

}
