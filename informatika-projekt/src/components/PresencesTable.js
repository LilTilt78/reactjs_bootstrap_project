import 'bootstrap/dist/css/bootstrap.min.css';

export const ShowPresences = (props) => {
  
    return (
        <div className="cotent-container">
          <div className="content-body">
            { props.presences?.map((presence)=> 
                <table className ="table table-presences" key={presence.id}>
                  <thead>
                    <tr>
                      <th>Presence ID: {presence.id} </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                            <td><span>User Email:</span> {presence.user.email} </td>
                    </tr>
                    <tr>
                          <td><span>Invitation:</span> {presence.invitationType.name} </td>
                    </tr>
                    <tr>
                          <td><span>Presence:</span> {presence.presenceType.name} </td>
                    </tr>
                  </tbody>
                </table>
                    )}
                  </div>
          </div>
    );
  }