import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { actual } from '../../URLs';


const FormClienteAlta = () => {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        razonSocial: '',
        telefono: '',
        email: '',
        ciudad: '',
        direccion: '',
        iva:'',
        cuit: '',
    }); 
    const [errors, setErrors] = useState({});

    //funcion valida inputs
    const validate = () => {
        const newErrors = {};

        if (!formData.nombre) newErrors.nombre = 'Nombre es requerido';
        if (!formData.apellido) newErrors.apellido = 'Apellido es requerido';
        //if (!formData.razonSocial) newErrors.razonSocial = 'Razón Social es requerida';
        if (!formData.telefono) newErrors.telefono = 'Telefono es requerido';
        //if (!formData.email) newErrors.email = 'Email es requerido';
        //if (!formData.ciudad) newErrors.ciudad = 'Ciudad es requerida';
        if (!formData.direccion) newErrors.direccion = 'Dirección es requerida';
        //if (!formData.iva) newErrors.iva = 'IVA es requerido';
        if (!formData.cuit) newErrors.cuit = 'CUIT es requerido';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        //quito msj de error si se llena el dato
        if(value){
            const errores = {...errors};
            delete errores[name];
            setErrors(errores);
        }
    };   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validate()){
            try {
                const response = await axios.post(`${actual}/clientes`, formData);
        
                if (response.status === 201) {
                    Swal.fire({
                        title: "OK",
                        text: "Cliente creado con éxito",
                        icon: "success"
                    });
                    setFormData({
                        nombre: '',
                        apellido: '',
                        razonSocial: '',
                        telefono: '',
                        email: '',
                        ciudad: '',
                        direccion: '',
                        cuit: '',
                        iva: ''
                    });
                }
            }catch(error){
                if (error.response && error.response.status === 400) {
                    Swal.fire({
                        title: "Error",
                        text: error.response.data.message,
                        icon: "error"
                    });
                }else{
                    Swal.fire({
                        title: "Error",
                        text: "Ocurrió un error al intentar crear el cliente",
                        icon: "error"
                    });
                }
            }
        }
    };
    
    return (
        <form className="client-form" onSubmit={handleSubmit}>
            {/* nombre y apellido */}
            <div className='cont-dos-items'>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <span className="error">{errors.nombre}</span>}
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                    {errors.apellido && <span className="error">{errors.apellido}</span>}
                </div>
            </div>
            
            {/* tel e email */}
            <div className='cont-dos-items'>
                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="number"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                    {errors.telefono && <span className="error">{errors.telefono}</span>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
            </div>
            
            {/* cuidad y direcc */}
            <div className='cont-dos-items'>
                <div className="form-group">
                    <label>Ciudad</label>
                    <input
                        type="text"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                    />
                    {errors.ciudad && <span className="error">{errors.ciudad}</span>}
                </div>
                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                    {errors.direccion && <span className="error">{errors.direccion}</span>}
                </div>
            </div>

            {/* razon social y cuit*/}
            <div className='cont-dos-items'>
                <div className="form-group">
                    <label>Razón Social</label>
                    <input
                        type="text"
                        name="razonSocial"
                        value={formData.razonSocial}
                        onChange={handleChange}
                    />
                    {errors.razonSocial && <span className="error">{errors.razonSocial}</span>}
                </div>
                <div className="form-group">
                    <label>CUIT</label>
                    <input
                        type="number"
                        name="cuit"
                        value={formData.cuit}
                        onChange={handleChange}
                    />
                    {errors.cuit && <span className="error">{errors.cuit}</span>}
                </div>
            </div>            

            {/* iva y condicion de pago */}            
            <div className="form-group-iva">
                <label>I.V.A</label>
                <input
                    type="text"
                    name="iva"
                    value={formData.iva}
                    onChange={handleChange}
                />
                {errors.iva && <span className="error">{errors.iva}</span>}
            </div>

            {/* botón */}
            <div className='cont-btn-enviar-formCliente'>
                <button type="submit" className='btn-enviar-form-cliente'>Enviar</button>
            </div>
        </form>
    );
};

export default FormClienteAlta;