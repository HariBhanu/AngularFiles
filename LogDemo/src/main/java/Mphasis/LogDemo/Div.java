package Mphasis.LogDemo;

import org.apache.log4j.Logger;

public class Div {
	final static Logger logger = Logger.getLogger(Hello.class);
	public static void main(String[] args) {
Div obj = new Div();
        
        try{
            obj.divide();
        }catch(ArithmeticException ex){
            logger.error("Sorry, something wrong!", ex);
        }
	}
	private void divide(){
	    
	    int i = 10 /0;
	}

}
