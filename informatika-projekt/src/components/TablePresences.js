import 'bootstrap/dist/css/bootstrap.min.css';
import { EditPresences } from './EditPresencesButton';

export const TablePresencies = (props) => {

  
    return (
        <div className="cotent-container">
          <div className="content-body">
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
                </table>
                    )}
                  </div>
          </div>


      // <div className="container p-2">
      //     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-dismiss="modal">Show Presencies</button>
      //       <div className="modal fade" id="exampleModal2" role='dialog' aria-hidden="true" tabIndex="-1">
      //         <div className="modal-dialog modal-lg modal-dialog-centered">
      //           <div className="modal-content">
      //             <div className="modal-header">
      //               <h1 className="modal-title fs-5" id="exampleModalLabel">Presences</h1>
      //               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      //             </div>
      //           <div className="modal-body">
      //             <form>
      //               { props.presences.map((presence)=> 
      //               <table className ="table table-presences" key={presence.id}>
      //                 <thead>
      //                   <tr>
      //                     <th>Presence ID: {presence.id} </th>
      //                   </tr>
      //                 </thead>
      //                 <tbody>
      //                   <tr>
      //                       <td><span>Presence Type ID:</span> {presence.presenceType.id} </td>
      //                       <td><span>Presence Type Name:</span> {presence.presenceType.name} </td>
      //                   </tr>
      //                   <tr>
      //                     <td><span>Invitation Type ID:</span> {presence.invitationType.id} </td>
      //                     <td><span>Invitation Type Name:</span> {presence.invitationType.name} </td>
      //                   </tr>
      //                   <tr>
      //                     <td><span>User ID:</span> {presence.user.id} </td>
      //                     <td><span>User Email:</span> {presence.user.email} </td>
      //                   </tr>
      //                 </tbody>
      //                 <EditPresences 
      //                 presenceId={presence.id}
      //                 presenceTypeId={presence.presenceType.id}
      //                 presenceTypeName={presence.presenceType.name}
      //                 invitationTypeId={presence.invitationType.id}
      //                 invitationTypeName={presence.invitationType.name}
      //                 userId={presence.user.id}
      //                 userEmail={presence.user.email}
      //                 />
      //               </table>
      //               )}
      //             </form>
      //           </div>
      //           <div className="modal-footer">
      //             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      //             <button type="button" className="btn btn-primary">Save</button>
      //           </div>
      //         </div>
      //       </div>
      //   </div>
            
          
      // </div>
    );
  }