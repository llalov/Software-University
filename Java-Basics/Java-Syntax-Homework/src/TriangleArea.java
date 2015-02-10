import java.util.Scanner;


public class TriangleArea {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter coordinates for A: ");
		int aX = scanner.nextInt();
		int aY = scanner.nextInt();
		System.out.println("Enter coordinates for B: ");
		int bX = scanner.nextInt();
		int bY = scanner.nextInt();
		System.out.println("Enter coordinates for C: ");
		int cX = scanner.nextInt();
		int cY = scanner.nextInt();		
		scanner.close();
		
		int area = (aX*(bY-cY)+bX*(cY-aY)+cX*(aY-bY))/2;
		
		System.out.println("The area is: "+ Math.abs(area));
	}

}
