const fullName = user => user.firstName + ' ' + user.lastName

const user = {firstName: 'Rahul', lastName: 'Attuluri'}
const element = (
  <div>
    <h1 className='greeting'>Hello {fullName(user)} !</h1>
    <p className='paragraph'>Good to see you here!</p>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))
