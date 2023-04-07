import React, { FormEvent, useState, useEffect } from 'react';
import {socket} from '../utils/socket';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import CustomModal from '../components/Modal/Modal';
import IMessage from '../types/message.interface';


const ChatPage = () => {
  const [author, setAuthor] = useState<string>('User12')
  const [messages, setMessages] = useState<IMessage[]>([])
  const [message, setMessage] = useState<string>('')
  const [room, setRoom] = useState<string>("testing")
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  
  useEffect(() => {
    socket.on('chat message', (message: IMessage) => {
      setMessages([...messages, message ])
    });
  }, [setMessages, messages, room])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('message', {room: room, author: author, message: message} );
    setMessage('')
  }

  const onStartRoom = () => {
    socket.emit('join room', room);
    socket.on('get messages', (data: IMessage[]) => {
      setMessages(data);
    });
    handleClose()
  }

  return (
    <div style={{backgroundColor: "#FFFFFF", padding: 100}}>

      <CustomModal open={open}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontWeight: "bold", fontSize: 30}}>
            Room Initialization
          </Typography>
          <TextField id="outlined-basic" label="Room Name" variant="outlined" fullWidth sx={{marginTop: 4}} onChange={(event) => setRoom(event.target.value)}/>
          <TextField id="outlined-basic" label="Pseudo" variant="outlined" fullWidth sx={{marginTop: 2}} onChange={(event) => setAuthor(event.target.value)}/>
          <Button variant="outlined" fullWidth sx={{marginTop: 4}} onClick={onStartRoom}>Save</Button>
      </CustomModal>

      <Box sx={{ height: "10vh", width: "100%" }}>
        <Typography variant="h2" component="h2" sx={{ color: '#', fontWeight: 'bold', fontSize: 120 }}>
          {room}
        </Typography>
      </Box>

      <Box sx={{ height: "60vh", width: '100%', marginTop: 5, overflow: "auto", backgroundColor: ""}}>
        <Stack spacing={2}>
        {messages.map(({author, message}, index) => (
          <div key={index} style={{width: "100%"}}>
            <Typography  variant="body1" sx={{ marginBottom: 1, fontSize: 30, fontWeight: "bold", color: "#2b444c" }}>
              {author}
            </Typography>
            <Typography  variant="body1" sx={{ marginBottom: 1, fontSize: 30 }}>
              {message}
            </Typography>
          </div>
        ))}
        </Stack>
      </Box>

      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, display: 'flex' }}>
        <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
          <TextField
            label="Message"
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ width: '100%' }}
          />
        </form>
        <Button variant="contained" color="primary" type="submit" onClick={handleSubmit} style={{ marginLeft: 2 }}>
          Envoyer
        </Button>
      </Box>
    </div>
  );
};

export default ChatPage;
