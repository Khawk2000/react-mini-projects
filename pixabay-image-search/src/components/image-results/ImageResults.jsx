import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material'
import { ZoomIn } from '@mui/icons-material'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
})

class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }

    handleClickOpen = (img) => {
        this.setState({open: true, currentImg: img});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        


        let imageListContent;
        const { images } = this.props;

        if (images) {
            imageListContent = (
                <ImageList cols={3} >
                    {images.map((image) => (
                        <ImageListItem key={image.id}>
                            <img
                                src={`${image.largeImageURL}?w=164&h=164&fit=crop&auto=format`}
                                alt={image.tags}
                            />
                            <ImageListItemBar
                                title={image.tags}
                                subtitle={image.user}
                                actionIcon={
                                    <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${image.tags}`} onClick={() => this.handleClickOpen(image.largeImageURL)}>
                                        <ZoomIn />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>

                    ))}
                </ImageList>

            )
        } else {
            imageListContent = null;
        }

        return (
            <div>
                {imageListContent}
                <Dialog 
                    open={this.state.open}
                    onClose={this.handleClose}
                    maxWidth='lg'
                    TransitionComponent={Transition}
                >
                    <DialogTitle>{"Close up of selected Image"}</DialogTitle>
                    <DialogContent>
                        <img src={this.state.currentImg} alt='' style={{ width: '100%' }}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Close Image</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults