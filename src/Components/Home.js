import { withRouter } from "react-router-dom";

const Home = () => {

	return (
		<div className='p-5 text-center bg-light' style={{ height: 900,}}>
        <h1 className='mb-3'>Heading</h1>
        <h4 className='mb-3'>Subheading</h4>
        
    </div>
	)
}

export default withRouter(Home);