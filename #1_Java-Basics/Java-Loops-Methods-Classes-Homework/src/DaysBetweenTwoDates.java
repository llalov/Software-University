import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class DaysBetweenTwoDates {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		String startDate = scanner.nextLine();
		String endDate = scanner.nextLine();
		scanner.close();
		SimpleDateFormat myFormat = new SimpleDateFormat("dd-MM-yyyy");

		try {
		    Date date1 = myFormat.parse(startDate);
		    Date date2 = myFormat.parse(endDate);
		    long diff = date2.getTime() - date1.getTime();
		    System.out.println ("Days: " + TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS));
		} catch (ParseException e) {
		    e.printStackTrace();
		}
	}
}
