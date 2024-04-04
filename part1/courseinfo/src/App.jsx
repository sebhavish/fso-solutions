import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  const courseData = [
    { name: part1, exercises: exercises1 },
    { name: part2, exercises: exercises2 },
    { name: part3, exercises: exercises3 }
  ]

  return (
    <div>
      <Header name={course} />
      <Content data={courseData} />
      <Total sum={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
