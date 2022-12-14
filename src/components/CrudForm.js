import React, { useState, useEffect, useContext } from 'react';
import CrudContext from '../context/CrudContext';

const initialForm = {
    name: "",
    horoscopo: "",
    id: null,
};

const CrudForm = () => {
    const {createData, updateData, dataToEdit, setDataToEdit} = useContext(CrudContext) ;   
    
    const [form, setForm] = useState({initialForm});

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    },[dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.horoscopo) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}></input>
                <input type="text" name="horoscopo" placeholder="Horoscopo" onChange={handleChange} value={form.horoscopo}></input>
                <input type="submit" value="Enviar"></input>
                <input type="reset" value="Limpiar" onClick={handleReset}></input>
            </form>
        </div>
    );
};

export default CrudForm;