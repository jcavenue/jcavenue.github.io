import { MDBFooter, MDBContainer, MDBIcon, MDBBtn} from 'mdb-react-ui-kit';

export default function Footer() {

  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <div>
					<MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} aria-label="Facebook" href='https://www.facebook.com/jcavenue30' rel="noreferrer nofollow" target="_blank" floating>
						<MDBIcon fab icon='facebook-f' />
					</MDBBtn>
					<MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} aria-label="Twitter" href='https://twitter.com/jcavenue30' rel="noreferrer nofollow" target="_blank" floating>
						<MDBIcon fab icon='twitter' />
					</MDBBtn>
					<MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} aria-label="Linkedin" href='https://www.linkedin.com/in/jcfababeir' rel="noreferrer nofollow" target="_blank" floating>
						<MDBIcon fab icon='linkedin-in' />
					</MDBBtn>
					<MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} aria-label="Github"href='https://github.com/jcavenue' rel="noreferrer nofollow" target="_blank" floating>
						<MDBIcon fab icon='github' />
					</MDBBtn>
				</div>
				<div className='text-center p-2' >
					&copy; {new Date().getFullYear()} Copyright:{' '}
					<a className='text-dark' target="_blank" rel="noreferrer nofollow" href='https://jcavenue.github.io'>
						jcavenue.github.io
					</a>
				</div>
      </MDBContainer>
    </MDBFooter>
  );
}