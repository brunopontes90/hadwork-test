"use client"
//import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Buscar() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://hardworkmedicina.com.br/exemploQuestoes.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <h1>Tela 2</h1>
            {data ? (
                <div>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                    {voltarHome()}
                </div>
            ) : (
                <div>
                    <p>Carregando...</p>
                    <Link href={'/'}>
                        <button>Ir para tela 1</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Buscar;


