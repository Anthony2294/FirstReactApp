
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';




export default function Todo({item, deleteToDo}) {


    const labelId  = `checkbox ${item.id}`; 


    return (

        <ListItem className='list'
            // key={item.id}
            secondaryAction= 
                {

                <IconButton sx={{marginRight: '10px'}} onClick={deleteToDo} edge="end" aria-label="comments">
                    <DeleteOutlineIcon fontSize='large' color="primary"/>
                </IconButton>

                }

                    disablePadding

                >
                    <ListItemButton role={undefined} dense>

                        <ListItemIcon>
                            <Checkbox
                            sx={{marginLeft: '6px'}}
                            size='large'
                            edge="start"
                            checked={item.isDone}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}/>
                        </ListItemIcon>

                            <ListItemText disableTypography={true} className='listText' id={item.id} primary={item} />

                    </ListItemButton>

        </ListItem>


    );
}

