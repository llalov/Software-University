import java.util.Scanner;
import java.util.TreeMap;

public class _B_ExamScore {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		for (int i = 0; i < 3; i++) {
			scanner.nextLine();
		}
		TreeMap<Integer, TreeMap<String, Double>> examList = new TreeMap<>();
		while (scanner.hasNext()) {
			String input = scanner.nextLine();
			if (input.contains("-")) {
				break;
			}
			String[] tokens = input.split("[ |]+");
			String names = tokens[1] + " " + tokens[2];
			int examScore = Integer.parseInt(tokens[3]);
			double grade = Double.parseDouble(tokens[4]);

			if (!examList.containsKey(examScore)) {
				TreeMap<String, Double> nameGrade = new TreeMap<>();
				nameGrade.put(names, grade);
				examList.put(examScore, nameGrade);
			}

			else {
				TreeMap<String, Double> nameGrade = examList.get(examScore);
				nameGrade.put(names, grade);
				examList.put(examScore, nameGrade);
			}
		}

		for (Object score : examList.keySet()) {
			
			String outputLine = score+" -> [";
			TreeMap<String, Double> nameGrade = examList.get(score);
			int counter = 0;
			double tempGrade = 0;
			
			for (String name : nameGrade.keySet()) {
				tempGrade += nameGrade.get(name);	
				outputLine += name+", ";
				counter++;	
			}
			String avg = String.format("%.2f",(tempGrade/counter));
			outputLine = outputLine.substring(0,outputLine.length()-2);
			outputLine += "]; avg="+ avg;
			System.out.println(outputLine);
		}
	}

}
