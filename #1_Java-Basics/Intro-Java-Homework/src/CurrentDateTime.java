import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;



public class CurrentDateTime {

	public static void main(String[] args) {
		Date date = new Date();
		System.out.println(date);
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		System.out.println(dateFormat.format(date));
	}

}
