import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchTracksById } from '../store/apiActions'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import noImage from '../assets/imgs/spotify.png'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RenderAlbums extends Component {
    constructor(props) {
        super(props)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.duasfunc = this.duasfunc.bind(this)
        this.state = {
            open: false
        }
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }
    getUrlImage(images) {
        let url = images.url
        return url
    }
    renderTracks(listTracks) {
        const list = listTracks || []
        
        return list.map(item => (
            <div key={item.id} style={{width: 300}}>
                    <Card>
                        <CardActionArea>
                            {/* <img src={item.images[0] ? this.getUrlImage(item.images[0]) : noImage} style={{ width: '100%' }} /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" noWrap>
                                    {item.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <br />
            </div>

        ))
    }
    duasfunc(id, token) {
        this.handleClickOpen()

        this.props.searchTracksById(id, token)
    }
    renderListAlbums(token) {
        const list = this.props.albums || []
        const render = list.map(item => {
            
            return (
                <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}  >
                    <Card  onClick={() => this.duasfunc(item.id, token)} >
                        <CardActionArea>
                            <img src={item.images[0] ? this.getUrlImage(item.images[0]) : noImage} style={{ width: '100%' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" noWrap>
                                    {item.name}
                                </Typography>
                                <Typography component="p" noWrap>
                                    <b>Artistas: </b>{item.artists.length === 1? item.artists[0].name : 'Vários artistas'}
                                    <br />
                                    <b>Disponibilidade: </b>{item.available_markets.map(item => (`${item}, `))}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Dialog
                        open={this.state.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Faixas do albúm"}
                        </DialogTitle>
                        <DialogContent>
                            {this.renderTracks(this.props.tracks)}
                        </DialogContent>
                    </Dialog> 


                </Grid>



            )
        })
        return render
    }

    render() {
        return (this.renderListAlbums(this.props.token))
    }
}

const mapStateToProps = state => ({ dialog: state.dadosApi.openDialog, tracks: state.dadosApi.tracksById, dadosApi: state.dadosApi.dados, albums: state.dadosApi.albums })
const mapDispatchToProps = dispatch => bindActionCreators({ searchTracksById }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RenderAlbums)