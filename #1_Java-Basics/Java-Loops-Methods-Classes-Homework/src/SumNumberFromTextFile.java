import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class SumNumberFromTextFile {

	public static void main(String[] args) throws IOException 
	{		
		FileReader file = new FileReader("/home/luchoazz/TextFile");
		int sum = 0;
		try {
			Scanner scanner = new Scanner(file);
			while(scanner.hasNext()){
				sum += scanner.nextInt();				
			}
			scanner.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		System.out.println("Sum is: "+ sum);
	}

}
