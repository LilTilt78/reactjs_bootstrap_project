import { useSelector } from 'react-redux';


export default function TablePresencies(props) {
    const events = useSelector(state => state.events);
  
    return (
      <div className="container ">
            { props.presences.map((presence)=> 
                    <table className ="table table-bordered" key={presence.id}>
                      <tbody>
                      <tr>
                          <td>{presence.id}</td>
                          <td>{presence.presenceType.name}</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
            )}
      </div>
    );
  }