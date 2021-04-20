import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import API from '../utils/API';
import EmployeeCard from '../components/EmployeeCard'

function Home () {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [userIndex, setUserIndex] = useState(0);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        API.getEmployees()
          .then(res => {
            setUsers(res.data.results);
            setUser(res.data.results[0]);
            console.log(user)
        }).catch(err => console.log(err));
      };
    

    return (
        <Container>
            <Row>
                <Col size="8">
                    <Search></Search>
                </Col>
            </Row>
            <Row>
                <Col size="md-8">
                    table goes here
                </Col>
                <Col size="md-4">
                    <EmployeeCard 
                    firstName={user.name.first}
                    lastName={user.name.last}
                    city={user.location.city}
                    phone={user.phone}
                    mobile={user.cell}
                    email={user.email}
                    image={user.picture.large}
                    dob={user.dob.date}/>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;