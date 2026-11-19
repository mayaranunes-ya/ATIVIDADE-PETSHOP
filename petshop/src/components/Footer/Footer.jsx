import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} PetShop Amigo Fiel - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;