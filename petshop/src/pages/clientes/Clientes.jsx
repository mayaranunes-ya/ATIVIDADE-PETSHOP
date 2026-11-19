import './Clientes.css';

function Clientes() {
  return (
    <main className="clientes-container">
      <section className="clientes-hero">
        <h1>Nossos Clientes e Serviços</h1>
        <p>
          Na PetShop Amigo Fiel, cuidamos do seu melhor amigo com carinho,
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
    </main>
  );
}

export default Clientes;