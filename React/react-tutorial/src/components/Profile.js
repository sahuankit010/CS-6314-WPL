function Profile(props){
    console.log(props)
    const {firstName, lastName} = props;
    return( <div>
        <h1>First Name: {firstName}</h1>
        <h1>Last Name: {lastName}</h1>

    </div>)
}

export default Profile;