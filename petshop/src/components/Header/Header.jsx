import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-brand">
        <span className="header-paw" aria-hidden="true">🐾</span>
        <h2>PetShop Patrulha do Pet</h2>
      </div>
      <span className="header-tagline">Prontos para salvar o dia!</span>
    </header>
  );
}

export default Header;