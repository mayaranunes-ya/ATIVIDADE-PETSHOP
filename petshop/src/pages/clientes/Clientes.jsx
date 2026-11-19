import './Clientes.css';
import fachadaPetshop from '../../assets/fachada-petshop.svg';

function Clientes() {
  return (
    <main className="clientes-container">
      <section className="clientes-hero">
        <h1>Nossos Clientes e Serviços</h1>
        <p>
          Na PetShop Patrulha do Pet, cuidamos do seu melhor amigo com carinho,
          segurança e atendimento especializado.
        </p>
      </section>

      <section className="clientes-cards">
        <div className="card">
          <h2>Banho e Tosa</h2>
          <p>Produtos hipoalergênicos e profissionais experientes para o bem-estar do seu pet.</p>
        </div>

        <div className="card">
          <h2>Consultas Veterinárias</h2>
          <p>Acompanhamento preventivo, vacinação e exames com atenção individualizada.</p>
        </div>

        <div className="card">
          <h2>Depoimentos</h2>
          <p>"Meu cachorro sempre volta feliz e cheiroso! Atendimento impecável." — Ana Paula</p>
        </div>
      </section>

      <section className="fachada">
        <div className="fachada-conteudo">
          <h2>Venha nos conhecer</h2>
          <p>Rua das Patinhas, 123 - Bairro Patrulha do Pet</p>
          <a href="tel:+551130000444">(11) 3000-0444</a>
        </div>
        <img
          src={fachadaPetshop}
          alt="Fachada ilustrada da PetShop Patrulha do Pet"
        />
      </section>
    </main>
  );
}

export default Clientes;