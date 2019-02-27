import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchAlbumById } from '../store/artistasActions'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import noImage from '../assets/imgs/spotify.png'

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class RenderArtistas extends Component {
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
    criterioPopularity(popularidade) {
        if (popularidade > 80)
            return 'Hot'
        else if (popularidade > 60)
            return 'Cool'
        else if (popularidade > 30)
            return 'Regular'
        else
            return 'Underground'
    }
    getUrlImage(images) {
        let url = images.url
        return url
    }
    renderAlbums(listAlbums) {
        const list = listAlbums || []
        return list.map(item => (
            <div key={item.id}>
                <Typography>
                {item.name}

                </Typography>
            </div>

        ))
    }
    duasfunc(id, token) {
        this.handleClickOpen()

        this.props.searchAlbumById(id, token)
    }
    renderListArtistas(token) {
        const list = this.props.dadosApi || []
        const render = list.map(item => {
            return (
                <Grid item xs={12} sm={4} md={4} lg={3} key={item.id} >
                    <Card onClick={() => this.duasfunc(item.id, token)}  >
                        <CardActionArea>
                            <img src={item.images[0] ? this.getUrlImage(item.images[0]) : noImage} style={{ width: '100%' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" noWrap>
                                    {item.name}
                                </Typography>
                                <Typography component="p">
                                    <b>Genêro: </b>{item.genres ? item.genres.map(genero => `${genero}, `) : ''}
                                    <br />
                                    <b>Popularidade: </b>{`${item.popularity} - ${this.criterioPopularity(item.popularity)}`}
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
                            {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                                {this.renderAlbums(this.props.albums)}
                        </DialogContent>
                    </Dialog>


                </Grid>



            )
        })
        return render
    }

    render() {
        return (this.renderListArtistas(this.props.token))
    }
}

const mapStateToProps = state => ({ dialog: state.dadosApi.openDialog, albums: state.dadosApi.albums, dadosApi: state.dadosApi.dados })
const mapDispatchToProps = dispatch => bindActionCreators({ searchAlbumById }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RenderArtistas)