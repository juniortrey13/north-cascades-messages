import {useState} from 'react';

function Message ( message ) {
  const [ showing, setShowing ] = useState( true );

  return (
    <div>
      <p><strong onClick={ ()=>{ setShowing( !showing ) } }>{ message.message.name }</strong>: 
      { showing ? message.message.text : '' }</p>
    </div>
  );

}

export default Message