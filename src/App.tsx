import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Container from "./components/Container";
import { Button } from "antd";
import { Formik } from "formik";

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
        <Box>
          <Formik
            initialValues={{
              titulo: "Homem Aranha",
              descricao: "O primeiro jogo da Márvel",
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="titulo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.titulo}
                  placeholder="Nome do Jogo"
                />
                {errors.titulo && touched.titulo && errors.titulo}
                <input
                  type="text"
                  name="descricao"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.descricao}
                  placeholder="Descrição do Jogo"
                />
                {errors.descricao && touched.descricao && errors.descricao}
                <button type="submit" disabled={isSubmitting}>
                  Enviar
                </button>
              </form>
            )}
          </Formik>
        </Box>

        <Box title="Jogos a zerar">
          {jogosaZerar.map((jogo: jogos) => (
            <>
              <p>{jogo.nome}</p>
              {/* <p>{jogo.descricao}</p> */}
            </>
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
