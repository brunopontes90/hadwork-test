"use client"
import Axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Buscar() {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(response => {
                const dataArray = response.data.results;
                setData(dataArray);
            });
    }, []);

    const returnApi = () => {
        return (
            <>
                {data.map((pokemon, index) => (
                    <div key={index}>
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </>
        );
    }

    return (
        <div>
            <h1>Tela 2</h1>
            {data == undefined ? "Carregando..." : returnApi()}
            
            <div>
                <Link href={'./screenTree'}>
                    <button>Ir para Tela 3</button>
                </Link>
                <Link href={'/'}>
                    <button>Retorne a tela 1</button>
                </Link>
            </div>
        </div>
    );
}

export default Buscar;


