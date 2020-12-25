export async function getStaticPaths() {
  const res = await fetch(`https://reqres.in/api/users?page=2`)
  const resJson = await res.json()
  const paths = resJson.data.map(product => {
    const id = product.id.toString()
    return { params: { id } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://reqres.in/api/users?page=2`)
  const resJson = await res.json()
  //const arr = []
  const producto = resJson.data.find(product => product.id == params.id)
  //arr.push(product)
  return {
    props: {
      producto
    }
  }
}

const Producto = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.producto.avatar} alt="" />
    </div>
  )
}

export default Producto

