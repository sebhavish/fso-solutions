const Content = (props) => {
  return (
    <div>
      <p>
        {props.data[0].name} {props.data[0].exercises}
      </p>
      <p>
        {props.data[1].name} {props.data[1].exercises}
      </p>
      <p>
        {props.data[2].name} {props.data[2].exercises}
      </p>
    </div>
  )
}

export default Content