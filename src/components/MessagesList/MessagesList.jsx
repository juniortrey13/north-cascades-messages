import {useState} from 'react';
import Message from '../Message/Message';

function MessagesList ( messages ) {
  return (
    <div>
      <h1>MessagesList</h1>
      {
        messages.messages.map( ( message, index )=>(
          <Message key={ index } message={ message }/>
        ))
      }
    </div>
  );

}

export default MessagesList