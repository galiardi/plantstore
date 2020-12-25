//import { useRouter } from 'next/router'
import Container from '../../components/container';

const User = ({ user }) => {
  //const router = useRouter();
  //const id = router.query.uid;
  console.log(user)
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={user.avatar}
                alt={`${user.first_name} picture`}
                style={{ borderRadius: '50%' }}
              />
            </div>
            <div className="card-body text-center">
              <h1>{user.first_name} {user.last_name}</h1>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>

      </div>
    </Container >
  )
}

User.getInitialProps = async (ctx) => {
  console.log(ctx.query.uid);
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.uid}`);
  const resJson = await res.json()
  return { user: resJson.data }
}

export default User