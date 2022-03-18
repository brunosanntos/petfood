import Header from "../../components/header";
import './style.css'
import Card from '../../components/product/card'

//Import icons 
import StarIcon from '@mui/icons-material/Star';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';

const Petshop = () => {
	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img className="img-fluid petshop-image" src={'https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'} /> <br/>
						<b>Petlove</b>
						<div className="petshop-info">
							<StarIcon className="icons star" />
							<text>
								<b> 2,8 </b>
							</text>
              <LocalAtmIcon />
              <text>
								<b> $$$ </b>
							</text>
              <GpsFixedIcon />
              <text>
								<b> 2,9km</b>
							</text>
						</div>
            <label className="badge badge-warning">Frete Grátis</label>
					</div>
					<div className="col-10">
            <h5> Produtos </h5>
            <div className="row">
              <Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
							<Card />
            </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Petshop;