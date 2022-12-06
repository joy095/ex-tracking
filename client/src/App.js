import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import ButtonAppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";

function App() {
  const [transations, setTransations] = useState([]);
  const [editTransations, setEditTransations] = useState({});

  useEffect(() => {
    fetchTransations();
  }, []);

  async function fetchTransations() {
    const res = await fetch("http://localhost:4000/transation");
    const { data } = await res.json();
    setTransations(data);
  }

  return (
    <div>
      <ButtonAppBar />

      <Container>
        <TransactionForm
          fetchTransations={fetchTransations}
          editTransations={editTransations}
        />

        <br />
        <TransactionsList
          transations={transations}
          fetchTransations={fetchTransations}
          setEditTransations={setEditTransations}
        />
      </Container>
    </div>
  );
}

export default App;
