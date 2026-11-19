import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-info">
        <p>© {new Date().getFullYear()} PetShop Patrulha do Pet</p>
        <a href="tel:+551130000444">Contato: (11) 3000-0444</a>
      </div>
      <p>Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;