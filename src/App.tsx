import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Container from "./components/Container";
import { Button } from "antd";

interface jogos {
  nome: string;
  descricao: string;
}

function App() {
  const [jogosaZerar, setJogosaZerar] = useState<jogos[]>([
    { nome: "Alone in the Dark", descricao: "Jogo de terror" },
    { nome: "Resident Evil 1", descricao: "O resident mais difícil" },
    { nome: "Resident Evil 2", descricao: "Segundo jogo da franquia" },
  ]);
  const [jogosZerados, setJogosZerados] = useState<jogos[]>([
    { nome: "Spiderman 1", descricao: "O primeiro jogo da Marvel" },
    { nome: "Crash 1", descricao: "O concorrente do Mário" },
    { nome: "Crash 2", descricao: "O concorrente do Mário" },
  ]);

  const adicionarJogos = (form: jogos) => {
    setJogosaZerar([...jogosaZerar, form]);
  };

  const removerJogos = () => {
    // Criar função de remover objetos do array no DatoCMS
  };

  return (
    <>
      <Container>
        <Box title="Jogos a zerar">
          {jogosaZerar.map((jogo: jogos) => (
            <p>{jogo.nome}</p>
          ))}
          <Button type="primary" size="large">
            Adicionar
          </Button>
          <Button type="primary" size="large" danger>
            Remover
          </Button>
        </Box>
        <Box title="Jogos zerados">
          {jogosZerados.map((jogo: jogos) => (
            <p>{jogo.nome}</p>
          ))}
          <Button type="primary" size="large">
            Adicionar
          </Button>
          <Button type="primary" size="large" danger>
            Remover
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
