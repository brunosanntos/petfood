// Import Logo futuro
import Logo from '../../assets/ifood-branco.png'
import Illustrator from '../../assets/illustrator.svg'
import Header from '../../components/header';

import '../../styles/global.css'

const Register = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header />
      <div className="row">
        <div className="col-6 my-auto text-right">
          <img src={Illustrator} className="img-fluid" alt="Pet" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">Falta pouco para seu Pet ser feliz.</h2>
            <br />
            <br />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome completo"
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de Nascimento"
            />
            <button className="btn btn-lg btn-block btn-secondary">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Register;