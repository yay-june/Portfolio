package prog07_nim;
/**
 * A game of 21
 * 
 * @author yejun
 * @since 11/22/21
 */
import java.util.Scanner;
public class Prog07_Nim {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int turn = 0; //this value will determine if it is the user's turn or the computer's turn
        int size = 0; //this value is the size of the stack
        size=validationOfStack(size);
        System.out.println();
        do //this loop takes the user's turn then the computer's turn and will contiuouly repeat until all the tokens in the stack are removed 
        {
            size=usersTurn(size);
            turn++;
            System.out.println();
            if(size==0)
                break;
            size=computersTurn(size);
            turn--;
            System.out.println();
            if(size==0)
                break;
        }
        while(size>0);
        if(size==0)
            if(turn==1)
                System.out.println("User's move clears the stack. You Win!!");
            else
                System.out.println("Computer's move clears the stack. You Lose!!");
    }  
    
    public static int validationOfStack(int size)
    {
        Scanner in = new Scanner(System.in);
        boolean correct = false;
        do
        {
            System.out.println("Enter starting stack size (value > 10): ");
            if(in.hasNextInt())
            {
                int temp = in.nextInt();
                if(temp>=11)
                {
                    size = temp;
                    break;
                }
                else
                    System.out.println("Input value must be a whole number with a value of at least 11.");
                    
            }
            else
                System.out.println("Input value must be a whole number with a value of at least 11.");
                in.nextLine();
        }  
        while(correct=true);
        return size;
    }
    public static int usersTurn(int size)
    {
        Scanner in = new Scanner(System.in);
        System.out.println("User's turn. "+size+" tokens on the stack.");
        boolean correct = false;
        do
        {
            System.out.println("Enter number of tokens to remove from stack: ");
            if(in.hasNextInt())
            {
                int taken = in.nextInt();
                if((taken==1||taken==2)&&((size-taken)>=0))
                {
                    size = size - taken;
                    break;
                }
                else
                    System.out.println("Input value must be a whole number with a value between 1 and 2");
                    
            }
            else
                System.out.println("Input value must be a whole number with a value between 1 and 2");
                in.nextLine();
        }  
        while(correct=true);
        return size;
    }
    public static int computersTurn(int size)
    {
        int taken = 0;
        System.out.println("Computer's turn. "+size+" tokens on the stack.");
        if(size==2||size==1)
        {
            if(size==2)
            {
                taken=2;
                size=0;
            }
            if(size==1)
            {
                taken=1;
                size=0;
            }
        }
        else 
        {
            if(Math.random()<0.5)
            {
                size--;
                taken++;
            }   
            else
            {
                size=size-2;
                taken=taken+2;
            }
        }
        System.out.println("The Computer removes "+taken+" tokens on the stack.");
        return size;
    }
}
        
     
        
        
        
        
        
    
    

