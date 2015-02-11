import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Scanner;
import java.util.TreeMap;

public class Exam4 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		TreeMap<String, LinkedHashMap<String, ArrayList<Integer>>> logsMap = new TreeMap<>();

		boolean finished = false;
		while (!finished) {
			String input = scanner.nextLine();
			if (input.equals("end")) {
				finished = true;
				continue;
			}
			String[] inputArray = input.split("[ =]+");

			String IP = inputArray[1];
			String user = inputArray[5];

			if (!logsMap.containsKey(user)) {
				logsMap.put(user,
						new LinkedHashMap<String, ArrayList<Integer>>());
				logsMap.get(user).put(IP, new ArrayList<Integer>());
				;
				logsMap.get(user).get(IP).add(1);
			} else if (!logsMap.get(user).containsKey(IP)) {
				logsMap.get(user).put(IP, new ArrayList<Integer>());
				logsMap.get(user).get(IP).add(1);
			} else {
				logsMap.get(user).get(IP).add(1);
			}
		}
		for (String userName : logsMap.keySet()) {
			System.out.println(userName + ":");
			String outPut = "";
			String finalOutPut = "";
			for (String ipAdress : logsMap.get(userName).keySet()) {
				String logs = String.format("%d", sumArray(logsMap
						.get(userName).get(ipAdress).toArray()));
				outPut = ipAdress + " => " + logs + ", ";
				finalOutPut += outPut;
			}
			finalOutPut = (finalOutPut.substring(0, finalOutPut.length() - 2));
			finalOutPut += ".";
			System.out.println(finalOutPut);

		}

	}

	public static byte sumArray(Object[] array) {
		int sum = 0;
		for (int i = 0; i < array.length; i++) {
			sum += (int) array[i];
		}
		return (byte) sum;

	}
}
