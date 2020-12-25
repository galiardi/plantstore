import Container from '../components/container'
import Link from 'next/link'
import fire from '../config/firebase_config'

const Products = (props) => {
  const products = props.lista;
  console.log(products)
  return (
    <Container>
      <h1>Products</h1>
      <ul className="list-group">
        {products.map(product => (
          <li
            key={product.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <Link href={`/productos/${product.title}`}>
              <a>
                <div>
                  <h5>
                    {product.title}
                  </h5>
                  <p>
                    {product.content}
                  </p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export async function getStaticProps(context) {
  const lista = [];
  await fire.firestore().collection('blog').get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        const id = doc.id;
        const documento = { ...data, id }
        lista.push(documento)
        console.log(lista)
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  return {
    props: { lista }, // will be passed to the page component as props
    revalidate: 1
  }
}

export default Products