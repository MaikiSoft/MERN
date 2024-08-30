import '../css/Aniadir.css'
import React, { useState } from 'react'
import { Tarea, initialTask, addTarea, resetForm } from '../controller/tasks/task';
import { EditTasks } from './editTasks';


function AddTasks() {

    const [arrTarea, setArrTarea] = useState<Tarea[]>([]);

    const [formTarea, setFromTarea] = useState<Tarea>(initialTask());

    const [isEditing, setIsEditing] = useState<Boolean>(false);

    const [editIndex, setEditIndex] = useState<Number | null>(null);

    const newvalues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFromTarea({
            ...formTarea,
            [name]: value
        })
    }

    const enviar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setArrTarea((prevTareas) => addTarea(prevTareas, formTarea))
        console.log('datos', arrTarea)
        setFromTarea(resetForm())
    }

    const handleEdit = (index:number) =>{
        setIsEditing(true)
        setEditIndex(index)
    }




    return (
        <> {arrTarea.map((tarea, index) => (
            <div key={index} className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{tarea.titulo}</h5>
                    <p className="card-text">{tarea.descripcion}</p>
                    <p className="card-text">{tarea.prioridad}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleEdit(index)}>
                Editar tarea
            </button>
                </div>
            </div>
        ))}
            


            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setFromTarea(initialTask())}>
                Agregar tarea
            </button>


            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{isEditing ? 'Nueva tarea': 'Editar tarea'}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={enviar}>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1" value={formTarea.titulo} onChange={newvalues} name='titulo' />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Descripcion</span>
                                    <textarea className="form-control" aria-label="With textarea" value={formTarea.descripcion} onChange={newvalues} name='descripcion'></textarea>
                                </div> <br />
                                <select className="form-select" aria-label="Default select example" value={formTarea.prioridad} onChange={newvalues} name='prioridad'>
                                    <option value="baja">baja</option>
                                    <option value="media">media</option>
                                    <option value="alta">alta</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">{isEditing ? 'Actualizar' : 'Guardar'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddTasks;