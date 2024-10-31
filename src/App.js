import React, { useState } from 'react';
import Home from "./components/Home"

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", age: 20, course: "Mathematics", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 2, name: "Bob Smith", age: 22, course: "Science", image: "https://randomuser.me/api/portraits/men/15.jpg" },
    { id: 3, name: "Charlie Brown", age: 21, course: "Literature", image: "https://randomuser.me/api/portraits/men/31.jpg" },
    { id: 4, name: "Diana Prince", age: 23, course: "History", image: "https://randomuser.me/api/portraits/women/52.jpg" },
    { id: 5, name: "Ethan Hunt", age: 20, course: "Engineering", image: "https://randomuser.me/api/portraits/men/33.jpg" },
    { id: 6, name: "Fiona Gallagher", age: 22, course: "Art", image: "https://randomuser.me/api/portraits/women/79.jpg" },
  ]);

  return (
    <div>
      <Home students={students} /> {/* Pass the students data to Home */}
    </div>
  );
}

export default App;