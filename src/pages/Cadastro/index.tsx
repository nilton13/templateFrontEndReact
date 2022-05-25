import { Layout } from "../../components/Layout"


export const Cadastro: React.FC = () =>{
    return(
        <>
            <Layout titulo="Cadastro de Alguma coisa">
            <form className="row g-3">
                <div className="col-12">
                    <label className="form-label ">Nome</label>
                    <input type="text" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Função</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Loja</label>
                    <input type="text" className="form-control" id="inputAddress"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Data Admissão</label>
                    <input type="date" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Data Desligamento</label>
                    <input type="date" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-md-12">
                    <label className="form-label">Observação</label>
                    <textarea className="form-control" rows={5} id="inputZip"/>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary col-3">Cadastrar</button>
                </div>
            </form>
            </Layout>
        </>
    )
}