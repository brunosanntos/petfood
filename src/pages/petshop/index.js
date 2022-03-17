import Header from "../../components/header";

//Import icons 
import StarIcon from '@mui/icons-material/Star';

const Petshop = () => {
	return (
		<div className="h-100">
			<Header />
			<div className="container">
				<div className="row">
					<div className="col-2">
						<img className="img-fluid" src={'https://play-lh.googleusercontent.com/5IQYhwNGOGuyAsCSC_NUjBOJ7dF3ZWV3S5GbAb98Vl74CVzGsZqQhrkY2K-I-meKew=s96-rw'} />
						<b>Petlove</b>
						<div className="petshop-info">
							<StarIcon/>
							<text>

								<b>2,8</b>
							</text>
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