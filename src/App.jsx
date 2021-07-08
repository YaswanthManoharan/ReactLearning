import User from "./components/user"

//JSX
function App() {
  return<div>
    <h1>
      Users
    </h1>
    <User name="Yas" description="Optimist"/>
    <User name="Tarun" description="Enthusiast"/>
  </div>;
}

export default App;
//Props - A data that is being passed from one component to another

//state - A set of data that an individual component holds