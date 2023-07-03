import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { EventDetail } from './EventDetailButton';
import { useDispatch, useSelector } from 'react-redux';
import { AddGroupInvitation } from './GroupInvitationButton';
import { AddUserInvitation } from './UserInvitationButton';

export const InvitationsCard= () => {

    const events = useSelector((state) => state.events);


    return (
        <div className="card" style={{width: '1000px'}}>
            <div className='card-header bg-dark text-light'><h4>Invitations Card</h4></div>
              <table className='table'>
                <thead>
                  <tr>
                    <td width="40%" style={{backgroundColor: '#9f3'}}>Name:</td>
                    <td width="30%" style={{backgroundColor: '#9f3'}}>Invitation:</td>
                    <td width="30%" style={{backgroundColor: '#9f3'}}>Presence:</td>
                  </tr>
                </thead>
              </table>
                <div className='card-body'>
                    { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <tbody>
                        <tr>
                          <td width="40%">{event.presence.user.email}</td>
                          <td width="30%">{event.presence.invitationType.name}</td>
                          <td width="30%">{event.presence.presenceType.name}</td>
                        </tr>
                      </tbody>
                    </table>
            )}
              <div className='container'  style={{ display: 'flex', gap: '10px' }}>
                <AddUserInvitation />
                <AddGroupInvitation />
              </div>
            </div>
        </div>
    )
  }