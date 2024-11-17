package mx.edu.utez.sgi.servlet.Classroom;

import mx.edu.utez.sgi.dao.ClassroomDao;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "DeleteClassroomServlet", value = "/DeleteClassroomServlet")
public class DeleteClassroomServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("view/ubicaciones.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=UTF-8");

        ClassroomDao classroomDao = new ClassroomDao();
        long id = Long.parseLong(request.getParameter("d_id"));
        request.setAttribute("success",classroomDao.deleteClassroom(id));

        doGet(request, response);
    }
}