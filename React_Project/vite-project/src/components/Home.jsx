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
        pagination: {
            display:'flex',
            justifyContent: 'center',
            flexWrap:'wrap'
        }
    }

    const [id, setId] = useState("");
    // const [totalItems, setTotalItems] = useState("");
    // const [itemsPerPage, setItemsPerPage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    const totalItems = ids.length;
    const itemsPerPage = 7;

    useEffect( () => {
        fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((result) => {
            console.log('This is all result: ',result.results);
            const idsArray = []
            result.results.map((objeto) => (
                idsArray.push(objeto.id)
            ))
            console.log('Este es idsArray: ',idsArray)
          setId(idsArray);
        // setTotalItems(totalItems);
        // setItemsPerPage(itemsPerPage);
        })
    })
    // console.log('Este es idsArray afuera: ',id)
    const indexOfLastImage = currentPage * itemsPerPage;
    const indexOfFirstImage = indexOfLastImage - itemsPerPage;
    const currentImages = ids.slice(indexOfFirstImage, indexOfLastImage);
    
//Calcular los indices de la primera y la ultima imagen a mostrar

    console.log('This is current images: ',currentImages)

    const handlePageChange = (page) => {
        setCurrentPage(page)
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
            <div style={styles.card}>
                {currentImages.map((i) =>(
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