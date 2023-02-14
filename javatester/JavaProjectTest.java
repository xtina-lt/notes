package javatester;

import java.util.Queue;
import java.util.Stack;

public class JavaProjectTest {
    static boolean isOperator(char e) {
        switch (e) {
            case '+':
            case '-':
            case '/':
            case '*':
                System.out.println("operator");
                return true;
            default:
                return false;
        }
    }

    public static void main(String[] args) {
        Stack<String> stack = new Stack<String>();
        Stack<String> tokens = new Stack<String>();
        String expression = "2 2 12 9 -+ + *";
        for (int i = 0; i < expression.length(); i++) {
            char current = expression.charAt(i);
            if (current == ' ') {
                continue;
            } else if ((i + 1 < expression.length()) && (expression.charAt(i + 1) != ' ')) {
                tokens.push(String.format("%c%c", current, expression.charAt(i + 1)));
                i++;
            } else {
                tokens.push(current + "");
            }
        }
        
        System.out.println("tokens" + tokens);
        while (!tokens.isEmpty()) {
            String current = tokens.pop();
            if ( isOperator(current.charAt(0)) & stack.size() > 2) {
                String op1 = stack.pop();
                String op2 = stack.pop();
                stack.push( current + op2 + op1 + "" );
            } else {
                stack.push(current + "");
            }

        }

        System.out.println(stack);
    }
}
