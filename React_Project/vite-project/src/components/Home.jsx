import React from "react";
import RickAndMortyCharacterCard from "./RickAndMortyCharacterCard";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/pngwing.com.png';
import Pagination from './Pagination';
import { useEffect, useState } from 'react'

const Home = () => {

    const styles = {
        navbar: {
            padding: '5px',
            display: 'flex',
            justifyContent: 'space-around',
            backdropFilter: 'blur(3px)',
            borderBottom: '0.2px solid #FFFFFF',
            lineHeight: '60px',
            height:'60px'
        },
        link: {
            color: '#32ff00',
            textDecoration: 'none',
            fontSize: '18px'
        },
        activeLink: {
          fontWeight: 'bold',
          borderBottom: '2px solid white',
        },
        logo: {
            height: '55px'
        },
        card: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
        search: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop:'7px'
        },
        pagination: {
            display:'flex',
            justifyContent: 'center',
            flexWrap:'wrap'
        }
    }

    const [id, setId] = useState("");
    const [totalItems, setTotalItems] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    // const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

    const [characterList, setCharactersList] = useState();

    useEffect( () => {
        const fetchAllCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/")
                const data = await response.json();
                    const idsArray = []
                    data.results.map((objeto) => (
                        idsArray.push(objeto.id)
                    ))
                    const indexOfLastImage = currentPage * itemsPerPage;
                    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
                    const currentImages = characters.slice(indexOfFirstImage, indexOfLastImage);
            //    <     console.log('Este es idsArray: ',idsArray)
            //       setId(idsArray);>
                     setCharacters(currentImages)
                     setTotalItems(idsArray.length)
                     setItemsPerPage(7)
                } catch (error) {
                console.error('Error fetching characters:', error);
                }
        }; 
        fetchAllCharacters();
       
    }, [])
    // console.log('Este es idsArray afuera: ',id)
      // const totalItems = characters.length;
    // const itemsPerPage = 7;
    
    // setCharacters(currentImages)
    //Calcular los indices de la primera y la ultima imagen a mostrar

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    useEffect(() => {
        const fetchCharacters = async () => {
            if(query.trim() === '') return; //no hacer solicitud si el término de búsqueda está vacío
            try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`);
            const data = await response.json();
            const charactersArray = [];
            data.results.map((objeto) => (
                charactersArray.push(objeto.id)
            ))
            
            const itemsPerPage = 7;
            const indexOfLastImage = currentPage * itemsPerPage;
            const indexOfFirstImage = indexOfLastImage - itemsPerPage;
            const currentImages = charactersArray.slice(indexOfFirstImage, indexOfLastImage);
            setCharacters(currentImages);
            console.log('This is data from button: ', charactersArray)
            setTotalItems(totalItems)
            setItemsPerPage(itemsPerPage)
            } catch (error) {
            console.error('Error fetching characters:', error);
            }
        };
    
        fetchCharacters();
        }, [query]);

    const handleSearch = () => {
        setQuery(searchTerm)
    }

    return(
        <div>
            <nav style={styles.navbar}>
                <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
                    <img src={logo} alt="Logo" style={styles.logo}/>
                </NavLink>
                <NavLink to="/characters" style={styles.link} activeStyle={styles.activeLink}>Characters</NavLink>
                <NavLink to="/about" style={styles.link} activeStyle={styles.activeLink}>Episodes</NavLink>
                <NavLink to="/contact" style={styles.link} activeStyle={styles.activeLink}>About</NavLink>
            </nav>
            <div style={styles.search}>
                <input
                    type="text"
                    placeholder="Search images..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{marginRight: '10px'}}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div style={styles.card}>
                {characters.map((i) =>(
                    <RickAndMortyCharacterCard id={i}/>
                ))}
            </div>
            <div style={styles.pagination}>
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default Home;