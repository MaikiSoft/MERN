// import React, { useState } from 'react';
// import { Tarea, createInitialTarea, addTarea, resetTarea } from '../controllers/taskController';

// const AddTask: React.FC = () => {
//     const [arrTarea, setArrTarea] = useState<Tarea[]>([]);
//     const [formTarea, setFromTarea] = useState<Tarea>(createInitialTarea());

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         const { name, value } = event.target;
//         setFromTarea(prevTarea => ({
//             ...prevTarea,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setArrTarea(prevTareas => addTarea(prevTareas, formTarea));
//         console.log('datos', arrTarea);
//         setFromTarea(resetTarea());
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="titulo">Título:</label>
//                     <input
//                         type="text"
//                         id="titulo"
//                         name="titulo"
//                         value={formTarea.titulo}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="descripcion">Descripción:</label>
//                     <textarea
//                         id="descripcion"
//                         name="descripcion"
//                         value={formTarea.descripcion}
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="prioridad">Prioridad:</label>
//                     <select
//                         id="prioridad"
//                         name="prioridad"
//                         value={formTarea.prioridad}
//                         onChange={handleChange}
//                     >
//                         <option value="baja">Baja</option>
//                         <option value="media">Media</option>
//                         <option value="alta">Alta</option>
//                     </select>
//                 </div>
//                 <button type="submit">Agregar Tarea</button>
//             </form>
//             <ul>
//                 {arrTarea.map((tarea, index) => (
//                     <li key={index}>{tarea.titulo} - {tarea.prioridad}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AddTask;
