import java.util.Scanner;


public class PointsInsideTheHouse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter the X and Y coordinates: ");
		
		Double x = scanner.nextDouble();
		Double y = scanner.nextDouble();  
		scanner.close();
		Double result1 = (12.5-17.5)*(y - 3.5)-(8.5-3.5)*(x - 17.5);
		Double result2 = (22.5-17.5)*(y - 3.5)-(8.5-3.5)*(x - 17.5);
		Double result3 = (22.5-12.5)*(y - 8.5)-(8.5-8.5)*(x - 12.5);
		
		if ((result1 <= 0)&&(result2>=0)&&(result3<=0) ) {
			System.out.println("Inside");
		}
		else if ((12.5<=x&&x<=17.5)&&(8.5<=y&&y<=13.5)) {
			System.out.println("Inside");
		}
		else if ((20<=x&&x<=22.5)&&(8.5<=y&&y<=13.5)) {
			System.out.println("Inside");
		}
		else {
			System.out.println("Outside");
		}
		}
		}
		
	
	

//                                                                   (Bx-Ax)*(Y-Ay) - (By-Ay)*(X-Ax)