import React,{  useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
// import mqtt from "precompiled-mqtt";
import SinglePost from '../components/SinglePost';
import io from 'socket.io-client';
const Dashboard = () => {
    const [messages, setMessages] = useState([]);
    // const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt')
    const socket = io('http://localhost:3001');
    
    //join Socket   
    useEffect(()=>{
        socket.emit('joinSocket',{topic:"sensor/update"})
        return ()=>socket.close();
    },[socket])
    
    useEffect(()=>{
        socket.on('mqttData',function(newMess){
            setMessages([...messages, newMess])
        })
        return () => socket.off('mqttData')
    },[socket,messages])

      /**
    useEffect(() => {        
        client.on('connect', function () {
            console.log("Client subscribed ");
            client.subscribe('sensor/update', function (err) {
                if (err) console.log(err)
            })
        })
    }, [client]);
    
    useEffect(() => {
        client.on('message', function (topic, message) {
            console.log(message.toString())
            setMessages([...messages, JSON.parse(message.toString())])
        })
        return () => client.end()
    },[client,messages]);*/

    const deleteMess = (index='')=>{
        const newArr = [...messages];
        newArr.splice(index,1);
        setMessages(newArr)
    }
    let body
    body = (
        <>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
                {
                    messages.map((post, index) => (
                        <Col className='my-2' key={index}>
                            <SinglePost post={{ ...post, index }} deleteMess={deleteMess} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
    return (
        <>{body}</>
    )
}
export default Dashboard