import './style.css'

const Card = () => {
  return (
    <div className="product col-3">
      <img src="https://cobasi.vteximg.com.br/arquivos/ids/819537/racao-golden-formula-caes-adultos-racas-pequenas-carne-arroz-mini-bits-1kg.jpg?v=637667907205070000" className="img-fluid align-center" />
      <h5>
        <label className="badge badge-primary">
          R$ 90,00 
        </label>
      </h5>
      <button className="btn btn-primary rounded-circle">+</button>
      <small>
        <b>Ração Golden Formula Cães Adultos Raças Pequenas Carne e Arroz Mini Bits 1 kg</b>
      </small>
    </div>
  )
}

export default Card;