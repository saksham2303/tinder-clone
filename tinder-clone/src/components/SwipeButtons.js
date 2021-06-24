import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function SwipeButtons() {
    function stats(){
       
        
        document.getElementById('status').innerHTML = "Function not assigned yet"
        document.getElementById('status').style.color= "red"
        document.getElementById('status').style.textAlign="Center"
        document.getElementById('status').style.paddingTop = "10px"
    }
    return (
    <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat" onClick={() => window.location.reload()}>
                <ReplayIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__left" onClick={() => window.close()}>
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__star" onClick={() => stats()}>
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__right" onClick={() => stats()}>
                <FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons__lightning" onClick={() => stats()}>
                <FlashOnIcon fontSize="large" />
            </IconButton>

        </div>
    )
}

export default SwipeButtons
