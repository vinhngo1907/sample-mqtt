import { Badge, Button, Card, Col, Row } from "react-bootstrap"
// import ActionButtons from "./ActionButtons"
import trashIcon from '../assets/trash.svg'
const SinglePost = ({ post:{title, status,description,index},deleteMess}) => {
    // const deleteMess = (index)
    return (
        <Card
            border={
                status === 'DONE' ? 'success' :
                    status === 'DOING' ? 'warning' : 'danger'
            }
            // border="success"
            className='shadow'
        >
            <Card.Body>
                <Card.Title>
                <Row>
                    <Col>
                        <p className='post-title'>{title}</p>
                        
                        <Badge
                            pill
                            variant={
								status === 'DONE'
									? 'success'
									: status === 'DOING'
									? 'warning'
									: 'danger'
							}
                        >
                            {status}
                        </Badge>
                    </Col>
                    <Col>
                        <Button className="post-button" 
                        onClick={()=>deleteMess(index)}><img src={trashIcon} alt="trash-icon" width="32" height="32"/></Button>
                    </Col>
                </Row>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SinglePost