import React from 'react'
import './Cadastro.css';
import Api from '../../API/api.js';

const Cadastro = (props) => {
    const history = props.history;
    
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        // pego o valor que usuario digitou nos inputs
        const tarefa = evento.target.tarefa.value; 
        const etiqueta = evento.target.etiqueta.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
    
        const tarefas = {
        tarefa,
        etiqueta: parseInt(etiqueta),
        prioridade,
        status
        }
        
        try {
        const response = await Api.fetchPost(tarefas)
        const result = await response.json();
        alert(result.message);
        history.push('/'); // forca o historico a voltar para a rota de / => home
        } catch(error) {
        console.log(error);
        }
        
    }
    
    return (
        <div className="container cadastro">
        <div className="card mt-4">
            <div className="card-title">
            <div className="row">
                <div className="col">
                <h3>Cadastro de tarefas</h3>
                </div>
            </div>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="tarefa" id="floatingInput" placeholder="Digite o tarefa"/>
                    <label htmlFor="floatingInput">tarefa</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                    <input type="text" className="form-control" name="etiqueta" id="floatingetiqueta" placeholder="Digite o etiqueta"/>
                    <label htmlFor="floatingetiqueta">etiqueta</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="prioridade" id="floatingInput" placeholder="Digite a prioridade"/>
                    <label htmlFor="floatingInput">prioridade</label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-floating">
                    <select className="form-control" name="status" id="floatingstatus" placeholder="Digite a status">
                        <option value="não iniciado">não iniciado</option>
                        <option value="iniciada">iniciada</option>
                        <option value="finalizada">finalizada</option>
                    </select>
                    <label htmlFor="floatingstatus">status</label>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col">
                    <button className="btn btn-success" type="submit">Enviar</button>
                    <button className="btn btn-outline-default">Voltar</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
    }
    
    export default Cadastro