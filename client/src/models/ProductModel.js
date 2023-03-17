import api from "../api.js";

export async function getAll(url = "/products") {
  const result = await api.get(url);

  if (result.status === 200) return result;
  else {
    console.log(result.status);
    console.log(result.data);
    console.log("Tom array");
    return [];
  }
}

// const [products, setProducts] = useState([]);
// useEffect(() => {
//    getAll().then(products => setProducts())
//}, [])
