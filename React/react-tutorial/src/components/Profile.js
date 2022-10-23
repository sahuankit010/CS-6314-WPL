function Profile(props){
    console.log(props)
    return( <div>
        <h1>First Name: {props.firstName}</h1>
        <h1>Last Name: {props.lastName}</h1>

    </div>)
}

export default Profile;