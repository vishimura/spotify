import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import { searchChanged } from '../store/homeActions'
import { searchArtista } from '../store/artistasActions'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import noImage from '../assets/imgs/spotify.png'

const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});



class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {},
            artists: [],
            accessToken: ''
        }
    }


    componentDidMount() {
        let parsed = queryString.parse(window.location.search)
        let accessToken = parsed.access_token
        this.setState({ accessToken })
        fetch('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then(response => response.json())
            .then(data => this.setState({ user: { name: data.display_name } }))

        // fetch('https://api.spotify.com/v1/search?q=maria&type=artist', {
        //     headers: {
        //         'Authorization': 'Bearer ' + accessToken,
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // }).then(response => response.json())
        //     .then(data => this.setState({
        //         artists: data.artists.items.map(item => {
        //             console.log(item)
        //             return {
        //                 id: item.id,
        //                 name: item.name,
        //                 popularity: item.popularity,
        //                 genres: item.genres,
        //                 images: item.images
        //             }
        //         })
        //     })
        // )
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
    renderArtistas() {

        const list = this.props.artistas.artistas || []
        const render = list.map(item => {
            return (
                // <Card key={item.id}>
                //     <CardContent >
                //         <Typography component="h5" variant="h5">
                //             {item.name}
                //         </Typography>
                //         <Typography variant="subtitle1" color="textSecondary">
                //             <p><b>Genêro: </b>{item.genres ? item.genres.map(genero => `${genero}, `) : ''}</p>
                //             <p><b>Popularidade: </b>{`${item.popularity} - ${this.criterioPopularity(item.popularity)}`}</p>
                //         </Typography>
                //     </CardContent>
                //     <CardMedia
                //         image={item.images[0] ? this.getUrlImage(item.images[0]) : ''}
                //         title="Live from space album cover"
                //     />
                // </Card>

                <Grid item xs={12} sm={4} md={4} lg={3} key={item.id}>
                    <Card>
                        <CardActionArea>
                            <img src={item.images[0] ? this.getUrlImage(item.images[0]) : noImage } style={{ width: '100%' }} />


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
                </Grid>
            )
        }
        )
        return render
    }
    render() {

        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12} style={{ flexGrow: 1 }} >
                        <TextField
                            id="filtro"
                            label="Filtro"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="busca"
                            label="Busca"
                            margin="normal"
                            variant="outlined"
                            value={this.props.search.text}
                            onChange={this.props.searchChanged}
                        />
                        <Button variant="contained" onClick={() => location.href = 'http://localhost:8888/login'} >
                            Login
                    </Button>
                        <Button variant="contained" onClick={() => this.props.searchArtista(this.props.search.text, this.state.accessToken)} >
                            Search
                    </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={16}>
                    
                    <Grid item xs={12} style={{ flexGrow: 1 }} >
                        <p>{this.state.user.name}</p>
                    </Grid>
                    {/* <ul>
                            {this.props.artistas.artistas.map(item => {
                                console.log(item)
                                return <li key={item.id}>{item.name}</li>
                            })}
                        </ul> */}

                    {this.renderArtistas()}


                </Grid>
            </div>


        )
    }
}

const mapStateToProps = state => ({ search: state.search, artistas: state.artistas })
const mapDispatchToProps = dispatch => bindActionCreators({ searchChanged, searchArtista }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Home)