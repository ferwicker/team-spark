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
    //const [userIndex, setUserIndex] = useState(0);
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        API.getEmployees()
          .then(res => {
            setUsers(res.data.results);
            setVisible(res.data.results);
            setUser(res.data.results[0]);
        }).catch(err => console.log(err));
      };

      const handleViewClick = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setUser(visible[value]);
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
          
          const sorted = visible.sort(compare);

        setVisible(sorted);
        setUser(visible[0]); //dont know why this is needed to re render table!
    }

    const handleFilter = (e) => {
        e.preventDefault();
        const currentState = e.target.value;
        console.log(currentState);
        let filtered = [];
        for (var i=0; i<users.length; i++){
            if (users[i].location.state === currentState){
                filtered.push(users[i]);
            } else if (currentState === 'all'){
                filtered = users;
            }
        }
        setVisible(filtered)
    };

    const handleSearch = (e) => {
        e.preventDefault();

        let searchParam = document.getElementById("search-param").value;
        //searchParam = searchParam.toLoweCase();
        let searchInput = document.getElementById("search-input").value;
        searchInput = searchInput.toUpperCase();
        //console.log(searchParam + searchInput);

        let results = [];
        let userValue;
        
        if(searchParam === 'all') {
            alert('Please select a "Search by" parameter')
            return
        } else {
            for (var i=0; i<users.length; i++){
            if(searchParam === 'city'){
                userValue = users[i].location.city;
            } else if(searchParam === 'first-name') {
                userValue = users[i].name.first;
            } else if (searchParam ==='last-name'){
                userValue = users[i].name.last;
            }
            userValue = userValue.toUpperCase();
            //console.log(userValue);
            if (userValue === searchInput){
                results.push(users[i]);
            } 
        }
        console.log(results)
        setVisible(results)
        setUser(results[0])
        document.getElementById("search-input").value = '';
    }
    }

    const clearFilters = (e) => {
        e.preventDefault();
        setVisible(users);
        document.getElementById('location-dropdown').value = 'all'
    }
    

    return (
        <Container>
            <Row>
                <Col size="8">
                    <Search search={handleSearch}></Search>
                </Col>
            </Row>
            <Row>
                <Col size="md-8">
                    {visible && <Table 
                    visible={visible}
                    handleViewClick={handleViewClick}
                    handleSort={handleSort}
                    handleFilter={handleFilter}
                    clearFilters={clearFilters}
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