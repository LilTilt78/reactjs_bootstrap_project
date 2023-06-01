//import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventsUpravit } from './UpravitButton';

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
                            <td><span>Presence Type ID:</span> {presence.presenceType.id} </td>
                            <td><span>Presence Type Name:</span> {presence.presenceType.name} </td>
                        </tr>
                        <tr>
                          <td><span>Invitation Type ID:</span> {presence.invitationType.id} </td>
                          <td><span>Invitation Type Name:</span> {presence.invitationType.name} </td>
                        </tr>
                        <tr>
                          <td><span>User ID:</span> {presence.user.id} </td>
                          <td><span>User Email:</span> {presence.user.email} </td>
                        </tr>
                      </tbody>
                      <EventsUpravit 
                      presenceId={presence.id}
                      presenceTypeId={presence.presenceType.id}
                      presenceTypeName={presence.presenceType.name}
                      invitationTypeId={presence.invitationType.id}
                      invitationTypeName={presence.invitationType.name}
                      userId={presence.user.id}
                      userEmail={presence.user.email}
                      />
                    </table>
            )}
      </div>
    );
  }