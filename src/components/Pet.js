const Pet = (props) => {
    return (
        <div>
          <h3>
            Name: {props.Name} 
            <button onClick={() => props.onDelete(props.id)}>Delete</button>         
          </h3>
          Type: {props.Type}  <br></br>              
          Color: {props.Color}                                     
        </div>    
      );
}

export default Pet;
