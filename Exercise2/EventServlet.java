import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class EventServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String name = request.getParameter("ename");
        String date = request.getParameter("date");
        String location = request.getParameter("location");
        String desc = request.getParameter("desc");


        response.setContentType("text/html");
        PrintWriter out = response.getWriter();


        out.println("<html><body>");
        out.println("<h2>Event Details</h2>");
        out.println("<p><b>Name:</b> " + name + "</p>");
        out.println("<p><b>Date:</b> " + date + "</p>");
        out.println("<p><b>Location:</b> " + location + "</p>");
        out.println("<p><b>Description:</b> " + desc + "</p>");
        out.println("</body></html>");
    }
}
