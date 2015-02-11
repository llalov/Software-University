import java.util.Scanner;

public class ArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		@SuppressWarnings("resource")
		Scanner scn = new Scanner(System.in);

		int sizeOfArray = scn.nextInt();
		scn.nextLine();
		long[] array = new long[sizeOfArray];

		for (int i = 0; i < array.length; i++) {
			array[i] = scn.nextLong();
		}

		String command = scn.next();

		while (!command.equals("stop")) { // changed value from "over" to "stop"
			String line = scn.nextLine().trim();
			int[] params = new int[2];

			if (command.equals("add") || command.equals("subtract")
					|| command.equals("multiply")) {
				// changed form substract to subtract
				String[] stringParams = line.split(" ");
				params[0] = Integer.parseInt(stringParams[0]);
				params[1] = Integer.parseInt(stringParams[1]);

				performAction(array, command, params);
			} else {
				performAction(array, command, params); // inserted performAction
														// in an else statement
			}

			printArray(array);
			System.out.print('\n');

			command = scn.next();
		}
	}

	static void performAction(long[] arr, String action, int[] params) {
		// removed array
		int pos = params[0];
		long value = params[1]; // changed type to long

		switch (action) {
		case "multiply":
			arr[pos - 1] *= value; // changed to arr, added -1 so we get our
									// desired position
			break;
		case "add":
			arr[pos - 1] += value; // changed to arr, added -1 so we get our
									// desired position
			break;
		case "subtract":
			arr[pos - 1] -= value; // changed to arr, added -1 so we get our
									// desired position
			break;
		case "lshift":
			arrayShiftLeft(arr); // changed to arr
			break;
		case "rshift":
			arrayShiftRight(arr); // changed to arr
			break;
		}
	}

	private static void arrayShiftRight(long[] array) {
		long temp = array[array.length - 1]; // created a temp variable to store
												// our temporary value
		for (int i = array.length - 1; i >= 1; i--) {
			array[i] = array[i - 1];
		}
		array[0] = temp; // assigned the temp value to array member
	}

	private static void arrayShiftLeft(long[] array) {
		long temp = array[0]; // created a temp variable to store our temporary
								// value
		for (int i = 0; i < array.length - 1; i++) {
			array[i] = array[i + 1];
		}
		array[array.length - 1] = temp; // /assigned the temp value
	}

	private static void printArray(long[] array) {
		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
	}

}
