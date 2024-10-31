import React from 'react';

function Home({ students }) {
  return (
    <div className="container bg-dark">
      <h1 className="my-4 bg-warning bg-gradient">Student List</h1>
      <div className="row">
        {students.map(student => (
          <div className="col-md-3 mb-4" key={student.id}>
            <div className="card">
              <img src={student.image} className="card-img-top" alt={student.name} />
              <div className="card-body">
                <h5 className="card-title">{student.name}</h5>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Course: {student.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;