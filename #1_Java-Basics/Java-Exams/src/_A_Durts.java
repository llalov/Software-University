import java.util.Scanner;

public class _A_Durts {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int centerX = scanner.nextInt();
		int centerY = scanner.nextInt();

		int radius = scanner.nextInt();
		int n = scanner.nextInt();

		for (int i = 0; i < n; i++) {
			int x = scanner.nextInt();
			int y = scanner.nextInt();

			if (((centerX - radius <= x) && (x <= centerX + radius))
					&& (centerY - (radius / 2) <= y)
					&& (y <= centerY + (radius / 2))) {
				System.out.println("yes");
			} else if ((centerX - (radius / 2) <= x)
					&& (x <= centerX + (radius / 2))
					&& ((centerY - radius <= y) && (y <= centerY + radius))) {
				System.out.println("yes");
			} else {
				System.out.println("no");
			}
		}
	}

}
