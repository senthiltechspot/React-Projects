
import SignInForm from "./SignInForm";

function App1() {
  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <div className="App">
      <header >
        <h1 className="App-title">Welcome to React x redux-form</h1>
        <br/>
      </header>
      <div className="container">
        <p className="App-intro">Contact Form</p>
        <SignInForm onSubmit={handleSignIn} />
      </div>
    </div>
  );
}

export default App1;
