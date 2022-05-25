import { Layout } from "../../components/Layout"


export const Gestao:React.FC = () =>{
    return(
        <>
            <Layout titulo="Gestão de Alguma Coisa">
            <form className="row g-3">
                <div className="col-md-4">
                    <label className="form-label">Data Inicial</label>
                    <input type="date" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Data Final</label>
                    <input type="date" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Loja</label>
                    <select id="inputState" className="form-select">
                    <option selected>Olveira Paiva</option>
                    <option>Matriz</option>
                    <option>Serrinha</option>
                    <option>...</option>
                    </select>
                </div>
                <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary col-3">Pesquisar</button>
                </div>
            </form>
            </Layout>
        </>
    )
}