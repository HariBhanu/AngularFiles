package Mphasis.LogDemo;

import org.apache.log4j.Logger;

public class Hello {
	final static Logger logger = Logger.getLogger(Hello.class);
	public static void main(String[] args) {
		System.out.println("Hello World");
		logger.info("Program success, Hari");
	}

}
