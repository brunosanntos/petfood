//import Logo from '../../assets/logo.png'
//import LogoWhite from '../../assets/logo-White.png'
import './style.css'

//Import icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = ({ whiteVersion }) => {
  return (
    <div className="col-12 logo">
      <header className="py-4 px-4 text-center">
        <div>
          codigo img abaixo
        </div>
      </header>
      <button className="btn btn-secondary cart-button">
        <ShoppingCartIcon />
        2 Items
      </button>
    </div>
  )
}

export default Header;

//** <img src={whiteVersion ? LogoWhite : Logo}  className="img-fluid"/>