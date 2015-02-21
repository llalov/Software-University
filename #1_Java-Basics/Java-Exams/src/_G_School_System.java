import java.util.ArrayList;
import java.util.Scanner;
import java.util.TreeMap;


public class _G_School_System {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);
		int n  = scanner.nextInt();
		scanner.nextLine();
		
		TreeMap<String,TreeMap<String,ArrayList<Integer>>> studentMap = new TreeMap<>();
		
		for (int i = 0; i < n; i++) {
			String [] input = scanner.nextLine().trim().split(" ");
			String student = input[0]+" "+input[1];
			String subject = input[2];
			int mark = Integer.parseInt(input[3]);
			
			if(!studentMap.containsKey(student)) {
				studentMap.put(student, new TreeMap<String,ArrayList<Integer>>());
				studentMap.get(student).put(subject, new ArrayList<Integer>());
				studentMap.get(student).get(subject).add(mark);
			}
			else if (!studentMap.get(student).containsKey(subject)) {
				studentMap.get(student).put(subject,new ArrayList<Integer>());
				studentMap.get(student).get(subject).add(mark);
			}
			else {
				studentMap.get(student).get(subject).add(mark);
			}
		}
			for (String studentName : studentMap.keySet()) {
				
				String output = studentName+": [";
				
				for (String subjectName : studentMap.get(studentName).keySet()) {
					
					output += subjectName+" - ";
					
					String avgMark = String.format("%.2f", averageOf(studentMap.get(studentName).get(subjectName).toArray()));
					
					output += avgMark+", ";
				}
				output = output.substring(0,output.length()-2);
				output += "]";
				System.out.println(output);
			}
			
		}


	public static double averageOf(Object[] array ) {
		double sum = 0;
		for (int i = 0; i < array.length; i++) {
			sum += (int) array[i];
		}
		double average = sum / array.length;
		return average;
	}
	
}
