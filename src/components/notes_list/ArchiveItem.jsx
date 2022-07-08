import React from 'react';
import { showFormattedDate } from '../../utils';

function ArchiveItem({ title, body, createdAt, deleteNote, id }){
    return(
        <div className="card flex-item">
            <div className='card-title'>
                <h3 style={{padding: '0', margin: '0'}}>{title}<span>   (Arsip)</span></h3>
                <p style={{padding: '0', margin: '0', fontSize: '12px'}}>{showFormattedDate(createdAt)}</p>
            </div>
            <div className='card-body'>
                <p>{body}</p>
            </div>
            <div className='card-button'>
                <button className='delete-btn' onClick={() => deleteNote(id)}>Hapus</button>
                <button className='move-btn'>Pindahkan</button>
            </div>
        </div>
    );
}

export default ArchiveItem;