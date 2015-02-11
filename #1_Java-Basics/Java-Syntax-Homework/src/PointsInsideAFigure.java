import java.util.Scanner;


public class PointsInsideAFigure {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scanner = new Scanner(System.in);
		
		Double x = scanner.nextDouble();
		Double y = scanner.nextDouble();
		scanner.close();
		
		if ((12.5 <= x && x<=22.5)&&(6 <= y && y <=8.5)) { 
			System.out.println("Inside");
		}
		else if ((12.5 <= x && x<=17.5)&&(8.5 <= y && y <=13.5)) {
			System.out.println("Inside");
		}
		else if ((20 <= x && x<=22.5)&&(8.5 <= y && y <=13.5)) {
			System.out.println("Inside");
		}
		else {
			System.out.println("Outside");
		}
		}
	}

