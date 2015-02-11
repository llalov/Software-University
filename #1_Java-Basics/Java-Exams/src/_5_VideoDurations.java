import java.util.Scanner;

public class _5_VideoDurations {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		boolean finished = false;
		int hours = 0;
		int mins = 0;
		while (!finished) {
			String input = scanner.nextLine();
			if (input.equals("End")) {
				finished = true;
				continue;
			}
			String[] minAndHours = input.split(":");
			hours += Integer.parseInt(minAndHours[0]);
			mins += Integer.parseInt(minAndHours[1]);
		}
		int totalMins = (hours * 60) + mins;
		hours = totalMins / 60;
		mins = totalMins % 60;

		System.out.printf("%d:%02d\n", hours, mins);

	}

}
