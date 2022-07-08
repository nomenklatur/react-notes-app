import { showFormattedDate } from '../../utils';

function NotesItem({ title, body, createdAt}){

    return(
        <div className="card flex-item">
            <div className='card-title'>
                <h3 style={{padding: '0', margin: '0'}}>{title}</h3>
                <p style={{padding: '0', margin: '0', fontSize: '12px'}}>{showFormattedDate(createdAt)}</p>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            <div className='card-button'>
                <button className='delete-btn'>Hapus</button>
                <button className='archive-btn'>Arsip</button>
            </div>
        </div>
    );
}

export default NotesItem;