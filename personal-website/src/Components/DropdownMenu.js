import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, IconButton } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {usePopupState,bindHover} from 'material-ui-popup-state/hooks'
import HoverMenu from 'material-ui-popup-state/HoverMenu'

const DropdownMenu = () => {
    const popupState = usePopupState({
      variant: 'popover',
      popupId: 'demoMenu',
    })
  

  return (
    <div>
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
            <IconButton
            id="basic-button"
            edge="start"
            color="inherit"
            aria-label="menu"
            variant="contained" {...bindHover(popupState)}
            >
                <MenuIcon />
            </IconButton>
            <HoverMenu
                {...bindMenu(popupState)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <MenuItem onClick={popupState.close}>Cake</MenuItem>
                <MenuItem onClick={popupState.close}>Death</MenuItem>
            </HoverMenu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  );

}

export default DropdownMenu