import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;
import java.io.FileWriter;

public class ListOfProducts {

	public static void main(String[] args) throws IOException {
		
		FileReader file = new FileReader("/home/luchoazz/Input");
		ArrayList<Product> productArr = new ArrayList<Product>();
		Scanner scanner = new Scanner(file);
		try {
			while(scanner.hasNext()){
				productArr.add(new Product(scanner.next(),scanner.nextDouble())); 								
			}
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		scanner.close();
		Collections.sort(productArr,new Comparator<Product>() {
			public int compare(Product prod1, Product prod2) {
					return Double.compare(prod1.getPrice(), prod2.getPrice());
			}
		});
		
		FileWriter writer = new FileWriter("/home/luchoazz/Output");
		try(PrintWriter out = new PrintWriter(new BufferedWriter(writer)))   {
		     for(Product prod: productArr) {
		    	 out.println(prod.showProduct());
		     }
		}
	}

}