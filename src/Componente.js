import React from 'react';
import './App.css';

const vaga = [
    {
        empresa: "Cubos",
        isNew: true,
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEkPQ9Xam3kBg/company-logo_200_200/0/1562000003767?e=2159024400&v=beta&t=cs3TJh2xTKlN9qWnHHM0gJjr2rz6YRTAGMo9wHY9hT8",
        especialidade: "Senior Frontend Developer",
        stack: ["Front", "css", "Sass", "React"],
        tempoDePostagem: 1,
        cargaHoraria: "Full Time",
        localDeTrabalho: "USA only"
    },
    {
        empresa: "Google",
        isNew: true,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUzBBfl4PPboaxCmOTtsdMik-fYk8Nj0BSw&usqp=CAU",
        especialidade: "Junior Backend Developer",
        stack: ["Algoritimo", "Banco De Dados", "NodeJS", "Api-rest", "Git"],
        tempoDePostagem: 30,
        cargaHoraria: "Part Time",
        localDeTrabalho: "BRA only"
    },
    {
        empresa: "Facebook",
        isNew: false,
        img: "https://img.utdstc.com/icon/5dc/91f/5dc91fda9553429a3d88933861dbc85217f8ba930f9dac0c24f102acffeb36c3:200",
        especialidade: "Pleno Frontend Developer",
        stack: ["Frontend", "BootStrap", "Html", "React"],
        tempoDePostagem: 10,
        cargaHoraria: "Full Time",
        localDeTrabalho: "Todos os paises"
    },
    {
        empresa: "Cubos",
        isNew: true,
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEkPQ9Xam3kBg/company-logo_200_200/0/1562000003767?e=2159024400&v=beta&t=cs3TJh2xTKlN9qWnHHM0gJjr2rz6YRTAGMo9wHY9hT8",
        especialidade: "Senior Frontend Developer",
        stack: ["Front", "css", "Sass", "React"],
        tempoDePostagem: 1,
        cargaHoraria: "Full Time",
        localDeTrabalho: "USA only"
    },
    {
        empresa: "Cubos",
        isNew: true,
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEkPQ9Xam3kBg/company-logo_200_200/0/1562000003767?e=2159024400&v=beta&t=cs3TJh2xTKlN9qWnHHM0gJjr2rz6YRTAGMo9wHY9hT8",
        especialidade: "Senior Frontend Developer",
        stack: ["Front", "css", "Sass", "React"],
        tempoDePostagem: 1,
        cargaHoraria: "Full Time",
        localDeTrabalho: "USA only"
    },
    {
        empresa: "Cubos",
        isNew: true,
        img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEkPQ9Xam3kBg/company-logo_200_200/0/1562000003767?e=2159024400&v=beta&t=cs3TJh2xTKlN9qWnHHM0gJjr2rz6YRTAGMo9wHY9hT8",
        especialidade: "Senior Frontend Developer",
        stack: ["Front", "css", "Sass", "React"],
        tempoDePostagem: 1,
        cargaHoraria: "Full Time",
        localDeTrabalho: "USA only"
    },
]

function Card(props) {

    // const { empresa, isNew, img, especialidade, stack, tempoDePostagem, cargaHoraria, localDeTrabalho } = props;

    return (
        vaga.map((element, index) => (
            <div className="card" key={index}>

            <div className="imagem">
                <img src={element.img} alt=""/>
            </div>

            <div id="detalhes">

                <div className="label">
                    <span className="empresa">{element.empresa}</span>
                   {console.log(vaga)}
                   {element.tempoDePostagem < 3 ? <span className="new" key={index}>NEW!</span> : ""}
                   
                </div>

                <div id="skills">
                      <span className="descricao-job">{element.especialidade}</span>
                    
                    <div id="stacks">
                        {element.stack.map((elemento, index) => (<span className="stack" key={index}>{elemento}</span>))}
                    </div>
                </div>

                <div id="info">
                    <span>{`${element.tempoDePostagem}d ago`}</span>
                    <span>{element.cargaHoraria}</span>
                    <span>{element.localDeTrabalho}</span>
                </div>

            </div>

            
        </div>
        ))  

    );
    
}


export default Card;
