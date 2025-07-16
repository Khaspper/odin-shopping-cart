import { useParams } from "react-router-dom";

function App() {
  const { id } = useParams();
  return <div>Gangster: {id}</div>;
}

export default App;
