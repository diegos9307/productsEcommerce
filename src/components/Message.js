const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: '1rem',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#fff',
    fontWeigth: 'bold',
    backgroundColor: bgColor
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
