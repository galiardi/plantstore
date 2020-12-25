import Container from '../components/container'
import Router from 'next/router'

const Usuarios = (props) => {
  const users = props.data;
  console.log(users);
  return (
    <Container>
      <h1>Usuarios</h1>
      <ul className="list-group">
        {users.map(user => (
          <li
            key={user.id}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            onClick={e => Router.push('usuarios/[uid]', `usuarios/${user.id}`)}>

            <div>
              <h5>
                {user.first_name} {user.last_name}
              </h5>
              <p>
                {user.email}
              </p>
            </div>
            <img
              src={user.avatar}
              alt={user.first_name + ' face'}
              style={{ borderRadius: '50%' }}
            />
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

export default Usuarios