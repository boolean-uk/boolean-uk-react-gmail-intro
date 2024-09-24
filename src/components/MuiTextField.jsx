import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MuiTextField =() => {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '95%' } }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Reply input box"
                    multiline
                    rows={4}
                    defaultValue=""
                />
            </div>
        </Box>
    )
}

export default MuiTextField;