//import { useSelector } from 'react-redux';


export default function TablePresencies(props) {
    //const events = useSelector(state => state.events);
  
    return (
      <div className="container ">
            { props.presences.map((presence)=> 
                    <table className ="table table-presences" key={presence.id}>
                      <thead>
                        <tr>
                          <th>Presence ID: {presence.id} </th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>Presence Type ID: {presence.presenceType.id} </td>
                          <td>Presence Type Name: {presence.presenceType.name} </td>
                      </tr>
                      <tr>
                        <td>Invitation Type ID: {presence.invitationType.id} </td>
                        <td>Invitation Type Name: {presence.invitationType.name} </td>
                      </tr>
                      <tr>
                        <td>User ID: {presence.user.id} </td>
                        <td>User Email: {presence.user.email} </td>
                      </tr>
                      </tbody>
                    </table>
            )}
      </div>
    );
  }