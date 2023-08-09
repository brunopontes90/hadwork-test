"use client"
import Axios from "axios";
import Link from "next/link";
import styles from '../page.module.css';
import { useEffect, useState } from "react";

function Search() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
            .then(response => {
                const dataArray = response.data.results;
                setData(dataArray);
            });
    }, []);

    const returnApi = () => {
        return (
            <div>
                {data.map((pokemon, index) => (
                    <div key={index} className={styles.divrequest}>
                        <p>{index++}</p>
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <div>
                <Link href={'./screenTree'}>
                    <button
                        className={styles.button}
                    >
                        Ir para Tela 3
                    </button>
                </Link>
                <Link href={'/'}>
                    <button
                        className={styles.button}
                    >
                        Retorne a tela 1
                    </button>
                </Link>
            </div>
            <div className={styles.divh1}>
                <h1 className={styles.h1}>Tela 2</h1>
            </div>
            {data == undefined ? "Carregando..." : returnApi()}
        </div>
    );
}

export default Search;


