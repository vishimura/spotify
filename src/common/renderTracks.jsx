import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import noImage from '../assets/imgs/spotify.png'

class RenderTracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    getUrlImage(images) {
        let url = images.url
        return url
    }
    convertMinutos(seg){
        let hora = Math.floor(seg / 3600000)
        let min =  (seg / 60000)
        let resto = (min - Math.floor(min))*60  
        return `${hora > 0? hora + ':': ''}${min.toFixed(0)}:${resto.toFixed(0) < 10? '0'+ resto.toFixed(0): resto.toFixed(0)} min`
    }

    renderListTracks() {
        const list = this.props.tracks || []
        const render = list.map(item => {
            console.log(item)
            return (
                <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}  >
                    <Card>
                        <CardActionArea>
                            <img src={item.album.images[0] ? this.getUrlImage(item.album.images[0]) : noImage} style={{ width: '100%' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" noWrap>
                                    {item.name}
                                </Typography>
                                <Typography component="p" noWrap>
                                    <b>Artistas: </b>{item.artists.length === 1? item.artists[0].name : 'Vários artistas'}
                                    <br />
                                    <b>Álbum: </b>{item.album.name}
                                    <br />
                                    <b>Duração: </b>{this.convertMinutos(item.duration_ms)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    


                </Grid>



            )
        })
        return render
    }

    render() {
        return (this.renderListTracks())
    }
}

const mapStateToProps = state => ({  tracks: state.dadosApi.tracks })
export default connect(mapStateToProps)(RenderTracks)