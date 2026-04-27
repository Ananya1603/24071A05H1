package com.example;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if (username.equals("ravi") && password.equals("1234")) {

            Date date = new Date();

            out.println("<html><body>");
            out.println("<h2>Welcome " + username + "</h2>");
            out.println("<p>Current Date & Time: " + date + "</p>");
            out.println("</body></html>");

        } else {
            out.println("<html><body>");
            out.println("<h2>Invalid Login</h2>");
            out.println("<a href='index.html'>Try Again</a>");
            out.println("</body></html>");
        }
    }
}