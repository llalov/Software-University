import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class OrderOfProducts {

	public static void main(String[] args) throws IOException {
			
		FileReader products = new FileReader("/home/luchoazz/Products");
		FileReader order = new FileReader("/home/luchoazz/Order");
		Scanner scanner = new Scanner(products);
		Scanner scanner2 = new Scanner(order);		
		
		ArrayList<Product> productsArr = new ArrayList<>();
		ArrayList<Order> orderArr = new ArrayList<>();
		
		while (scanner.hasNext()) {
			productsArr.add(new Product(scanner.next(),scanner.nextDouble()));
		}
		while (scanner2.hasNext()) {
			orderArr.add(new Order(scanner2.nextDouble(),scanner2.next()));
		}
		scanner.close();
		scanner2.close();
		double sum = 0;
		
		for (int i = 0; i < productsArr.size(); i++) {
			for (int j = 0; j < orderArr.size(); j++) {
				if (productsArr.get(i).getName().equals(orderArr.get(j).getName())) {
					sum += (orderArr.get(j).getQuantity() * productsArr.get(i).getPrice());
				}
				else {
				}
			}		
		}
		
		FileWriter writer = new FileWriter("/home/luchoazz/Output");
		try(PrintWriter out = new PrintWriter(new BufferedWriter(writer))) {
			out.printf("%.1f",sum);
		}
	}

}
