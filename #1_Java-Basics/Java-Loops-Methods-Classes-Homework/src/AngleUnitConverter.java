import java.util.Scanner;

public class AngleUnitConverter {
	//Method for converting degrees to radians.
	public static double convToRad (double numb){
		double result = Math.toRadians(numb);
		return result;
	}
	//Method for converting radians to degrees.
	public static double convToDeg (double numb){
		double result = Math.toDegrees(numb);
		return result;
	}
	
	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		
		double[] num = new double[n];
		String[] str = new String[n];
		// Reads n times the input form console and stores input in arrays.
		for (int i = 0; i < n; i++) {
			num[i] = scanner.nextDouble();
			str[i] = scanner.next();			
		}
		scanner.close();
		
		// Checks elements in array if containing "deg" or "rad", converts and prints them.
		for (int i = 0; i < n; i++) {
			if (str[i].equals("deg")){
				System.out.printf("%.6f rad\n",convToRad(num[i]));
			}
			if (str[i].equals("rad")){
				System.out.printf("%.6f deg\n",convToDeg(num[i]));
			}
				
		}
		
	}

}
