import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";

const Home = () => {
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
  );
};

export default Home;
