import { MDBContainer, MDBRow, MDBCol, MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import AboutBG_1 from "../Assets/img/AboutBG_1.png";
import AboutBG_col from "../Assets/img/About_RowCol1_BG.png";

const AboutFeature = () => {
	return (
		<>
			<div className='pt-5 text-center bg-image'
        style={{ backgroundImage: `url(${AboutBG_1})`}} >
				<MDBContainer className="pt-5">
					<MDBRow className="mt-5">
						<MDBCol lg="6">
							<MDBTypography variant='h3' className="text-dark fw-bold text-center text-md-start">JOHN CARLO FABABEIR</MDBTypography>
							<MDBTypography variant='h1' className="fw-bold text-white text-center text-md-start"  style={{fontSize: '50px'}}>FRONT END</MDBTypography>
							<MDBTypography variant='h1' className="fw-bold text-white text-center text-md-start pb-3"  style={{fontSize: '50px'}}>DEVELOPER</MDBTypography>
							<div className='text-center text-md-start pb-3'>
								<MDBBtn  color='success'>
								Contact me
							</MDBBtn>
							</div>
							
							<p className="lh-base fw-normal text-center text-md-start">
								I’m a web developer living in the Philippines. I am a fan of technology, 
								web development, and reading. I’m also interested in art and design. 
								You can read my blog with a click on the button above.
							</p> 
						</MDBCol>
						<MDBCol sm="12" lg="6" className="bg-image mt-3">
							<img src={AboutBG_col} className='img-fluid' alt='...' />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		</>
	)
}

export default AboutFeature;