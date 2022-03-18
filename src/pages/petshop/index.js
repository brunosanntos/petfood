import Header from "../../components/header";

//Import icons 
import StarIcon from '@mui/icons-material/Star';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Petshop = () => {
	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img className="img-fluid" src={'https://www.petlove.com.br/static/uploads/banner_image/image/4304/logo-petlove-push.png'} /> <br/>
						<b>Petlove</b>
						<div className="petshop-info">
							<StarIcon/>
							<text>
								<b> 2,8</b>
							</text>
              <LocalAtmIcon />
						</div>
					</div>
					<div className="col-10">

					</div>
				</div>
			</div>
		</div>
	)
}

export default Petshop;