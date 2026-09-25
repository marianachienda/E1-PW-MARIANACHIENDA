// admin/controllers/alumnos_controllers.js

export function home(req, res) {
  let students = [
    {
      id: 1,
      name: "Juan",
      apellido: "Pérez",
      carrera: "Ingeniería de Sistemas",
      edad: 20
    },
    {
      id: 2,
      name: "María",
      apellido: "García",
      carrera: "Ingeniería Civil",
      edad: 21
    },
    {
      id: 3,
      name: "Carlos",
      apellido: "Rodríguez",
      carrera: "Ingeniería Industrial",
      edad: 22
    },
    {
      id: 4,
      name: "Ana",
      apellido: "López",
      carrera: "Arquitectura",
      edad: 19
    },
    {
      id: 5,
      name: "Luis",
      apellido: "Martínez",
      carrera: "Medicina Humana",
      edad: 23
    }
  ];

  return res.render('admin/students', {
    title: 'Admin Site)',
    students: students,
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}