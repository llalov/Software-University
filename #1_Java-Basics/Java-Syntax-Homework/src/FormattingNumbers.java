import java.util.Scanner;


public class FormattingNumbers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		
		int a = scanner.nextInt();
		Float b = scanner.nextFloat();
		Float c = scanner.nextFloat();
		scanner.close();
		
		String hexadec = String.format("%-10s",Integer.toString(a,16));
		String binary = String.format("%10s",Integer.toString(a,2)).replace(' ','0');
		String floatRight = String.format("%10.2f",b);
		String floatLeft = String.format("%-10.3f",c);
		
		System.out.println("|"+hexadec.toUpperCase()+"|"+binary+"|"+floatRight+"|"+floatLeft+"|");
	}

}
