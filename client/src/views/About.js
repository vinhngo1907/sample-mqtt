import { Row,Col,Button } from "react-bootstrap"
const About = ()=>{
    return(
        <Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				<Button
					variant='primary'
					href='https://github.com/vinhngo1907'
					size='lg'
				>
					Visit my github for more tutorials
				</Button>
			</Col>
		</Row>
    )
}

export default About