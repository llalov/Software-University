import java.util.Scanner;

public class InstructionSet {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		boolean check = true; // Created boolean which we use as a condition for
								// out while loop.

		while (check == true) { // Changed the condition.
			String opCode = input.nextLine();// Inserted opCode inside Loop, so
												// each time we can enter a new
												// value for our string.
			if (opCode.equals("END")) {
				check = false; // Used the boolean value so whenever the input
								// is END we can leave the loop.
			} else {
				String[] codeArgs = opCode.split(" ");
				long result = 0;
				switch (codeArgs[0]) {
				case "INC": {
					long operandOne = Integer.parseInt(codeArgs[1]);
					result = ++operandOne; // Changed from operand++ to
											// ++operand, otherwise we get
											// invalid output.
					break;
				}
				case "DEC": {
					long operandOne = Integer.parseInt(codeArgs[1]);// Switched
																	// to long
																	// so we can
																	// get our
																	// tests
																	// running.
					result = --operandOne;// Changed from operand-- to
											// --operand, otherwise we get
											// invalid output.
					break;
				}
				case "ADD": {
					long operandOne = Integer.parseInt(codeArgs[1]);// Switched
																	// to long
																	// so we can
																	// get our
																	// tests
																	// running.
					long operandTwo = Integer.parseInt(codeArgs[2]);// Switched
																	// to long
																	// so we can
																	// get our
																	// tests
																	// running.
					result = operandOne + operandTwo;
					break;
				}
				case "MLA": {
					long operandOne = Integer.parseInt(codeArgs[1]);// Switched
																	// to long
																	// so we can
																	// get our
																	// tests
																	// running.
					long operandTwo = Integer.parseInt(codeArgs[2]);// Switched
																	// to long
																	// so we can
																	// get our
																	// tests
																	// running.
					result = (long) (operandOne * operandTwo);
					break;
				}
				default:
					break;
				}

				System.out.println(result);
			}
		}
	}

}
