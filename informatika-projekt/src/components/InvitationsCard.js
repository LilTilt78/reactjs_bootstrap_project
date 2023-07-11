import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { useDispatch, useSelector } from 'react-redux';
import { AddGroupInvitation } from './GroupInvitationButton';
import { AddUserInvitation } from './UserInvitationButton';
import { InviteDetail } from './InvitationDetailButton';

export const InvitationsCard= () => {

  const events = useSelector((state) => state.events);


    return (
        <div className="card" style={{width: '1000px'}}>
            <div className='card-header bg-dark text-light'><h4>Invitations Card</h4></div>
              <table className='table'>
                <thead>
                  <tr>
                    <td width="100%" style={{backgroundColor: '#9f3'}}>Event name:</td>
                    {/* <td width="30%" style={{backgroundColor: '#9f3'}}></td> */}
                  </tr>
                </thead>
              </table>
                <div className='card-body'>
                    { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <tbody>
                        <tr>
                          <td width="100%">{event.name}</td>
                          <InviteDetail eventDetail={event}/>
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