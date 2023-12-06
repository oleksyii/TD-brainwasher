import logo from './logo.svg';
import './App.css';
import TeamMember from "./WorkerComponent/TeamMember";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const teamMember = {
    name: 'John',
    surname: 'Doe',
    position: 'Software Developer',
    photoUrl: logo,
  };

  return (
    <div className="App">
      <TeamMember
          name={teamMember.name}
          surname={teamMember.surname}
          position={teamMember.position}
          photoUrl={teamMember.photoUrl}
      />
    </div>
  );
}

export default App;
