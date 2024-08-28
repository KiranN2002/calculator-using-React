
const Register = () => {
    return (
        <div>
            <h1>Student Registration Form</h1>
            <label htmlFor="usn">USN</label>
            <input type="text" name="usn" className="usn"/>
            <label htmlFor="name">Student Name</label>
            <input type="text" name="name" className="name"/>
            <label htmlFor="mail">E-mail</label>
            <input type="text" name="mail" className="mail"/>
            <label htmlFor="phno">Phone No</label>
            <input type="text" name="phno" className="phno"/>
            <label htmlFor="pwd">Password</label>
            <input type="password" name="pwd" className="pwd"/>
            <label htmlFor="cpwd">Confirm Password</label>
            <input type="password" name="cpwd" className="cpwd"/>
            <input type="submit" value="submit"/>
        </div>
    );
}

function Student() {
    return (
        <div>
            <Register />
        </div>
    );
}

export default Student;
