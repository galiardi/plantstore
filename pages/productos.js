import Container from '../components/container'
import Link from 'next/link'

const Productos = (props) => {
  const products = props.data;
  console.log(products)
  return (
    <Container>
      <h1>Productos</h1>
      <ul className="list-group">
        {products.map(product => (
          <li
            key={product.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <Link href={`/productos/${product.id}`}>
              <a>
                <div>
                  <h5>
                    {product.first_name} {product.last_name}
                  </h5>
                  <p>
                    {product.email}
                  </p>
                </div>
                <img
                  src={product.avatar}
                  alt={product.first_name + ' face'}
                  style={{ borderRadius: '50%' }}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://reqres.in/api/users?page=2`)
  const resJson = await res.json()
  const data = resJson.data

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Productos