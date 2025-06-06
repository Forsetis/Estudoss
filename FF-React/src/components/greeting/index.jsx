const greetingStyle = {
    backgroundColor: 'yellow',
    color: 'red',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '20px'
}

export function Greeting(props) {
    return (
        <p style={greetingStyle}>Hello {props.firstName} {props.lastName}!</p>
    );
}