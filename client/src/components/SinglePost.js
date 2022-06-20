import { Badge, Button, Card, Col, Row } from "react-bootstrap"
// import ActionButtons from "./ActionButtons"
import trashIcon from '../assets/trash.svg'
const SinglePost = ({ post:{title,random, index}, deleteMess}) => {
    // const deleteMess = (index)
    return (
        <Card
            // border={
            //     status === 'LEARNED' ? 'success' :
            //         status === 'LEARNING' ? 'warning' : 'danger'
            // }
            border="success"
            className='shadow'
        >
            <Card.Body>
                <Card.Title>
                <Row>
                    <Col>
                        <p className='post-title'>{title}</p>
                        
                        <Badge
                            pill
                            variant="success"
                            // variant={
							// 	status === 'LEARNED'
							// 		? 'success'
							// 		: status === 'LEARNING'
							// 		? 'warning'
							// 		: 'danger'
							// }
                        >
                            {/* {status} */}
                        </Badge>
                    </Col>
                    <Col>
                        {/* <ActionButtons url={url} _id={_id} /> */}
                        <Button className="post-button" 
                        onClick={()=>deleteMess(index)}><img src={trashIcon} alt="trash-icon" width="32" height="32"/></Button>
                    </Col>
                </Row>
                </Card.Title>
                <Card.Text>{random}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SinglePost