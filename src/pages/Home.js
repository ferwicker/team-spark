import React, {useState, useEffect} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Search from "../components/Search";
import API from '../utils/API';
import EmployeeCard from '../components/EmployeeCard';
import Table from '../components/Table';

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
        }).catch(err => console.log(err));
      };

      const handleViewClick = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setUser(users[value]);
      };

    const handleSort = (e) => {
        e.preventDefault();
        const sortValue = e.target.value;
        
        function compare(a, b) {
            // Use toUpperCase() to ignore character casing
            const nameA = a.name[sortValue].toUpperCase();
            const nameB = b.name[sortValue].toUpperCase();
          
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
          }
          
          const sorted = users.sort(compare);

        setUsers(sorted);
        console.log(users)
    }
    

    return (
        <Container>
            <Row>
                <Col size="8">
                    <Search></Search>
                </Col>
            </Row>
            <Row>
                <Col size="md-8">
                    {users && <Table 
                    users={users}
                    handleViewClick={handleViewClick}
                    handleSort={handleSort}
                    />}
                </Col>
                <Col size="md-4">
                    {user && <EmployeeCard 
                    firstName={user.name?.first}
                    lastName={user.name?.last}
                    city={user.location?.city}
                    phone={user.phone}
                    mobile={user.cell}
                    email={user.email}
                    image={user.picture?.large}
                    dob={user.dob?.date}
                    />}
                </Col>
            </Row>
        </Container>
    );
}
export default Home;