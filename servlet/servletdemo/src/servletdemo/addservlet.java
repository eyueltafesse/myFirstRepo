package servletdemo;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class addservlet extends HttpServlet {
	
//	public void service(HttpServletRequest req , HttpServletResponse res) throws IOException
//	{
//		int i = Integer.parseInt(req.getParameter("num1"));
//		int j = Integer.parseInt(req.getParameter("num2"));
//		int k = i+j;
//		
////		System.out.println("the result is:" + k);
//		
//		PrintWriter out = res.getWriter();
//		out.println("Result is: "+k);
//		
//	}
	public void doPost(HttpServletRequest req , HttpServletResponse res) throws IOException
	{
		int i = Integer.parseInt(req.getParameter("num1"));
		int j = Integer.parseInt(req.getParameter("num2"));
		int k = i+j;
		
//		System.out.println("the result is:" + k);
		
		PrintWriter out = res.getWriter();
		out.println("Result is: "+k);
		
	}
	public void doGet(HttpServletRequest req , HttpServletResponse res) throws IOException
	{
		int i = Integer.parseInt(req.getParameter("num1"));
		int j = Integer.parseInt(req.getParameter("num2"));
		int k = i+j;
		
//		System.out.println("the result is:" + k);
		
		PrintWriter out = res.getWriter();
		out.println("Result is: "+k);
		
	}

	

}
