export interface Tarea {
    titulo: string;
    descripcion: string;
    prioridad: string;
}

export const initialTask =(): Tarea => ({
    titulo: '',
    descripcion: '',
    prioridad: 'baja',
})

export const addTarea = (tareas: Tarea[], newTarea:Tarea): Tarea[] => [
    ...tareas,
    newTarea
];


export const resetForm = (): Tarea => initialTask();



