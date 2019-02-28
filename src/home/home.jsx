import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import queryString from 'query-string'

import { searchChanged, filtroChanged } from '../store/homeActions'
import { searchApi } from '../store/apiActions'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Search from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import logo from '../assets/imgs/logo.png'

import RenderArtistas from '../common/renderArtistas'
import RenderAlbums from '../common/renderAlbums'
import RenderTracks from '../common/renderTracks'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
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

    }
    render() {
        const { classes } = this.props;
        return (

            this.state.accessToken ?
                <div>
                    <Grid container justify='center' style={{ paddingTop: 15 }}>
                        <Grid item xs={10}>
                            <Paper elevation={1}>
                                <Typography variant='title' align='center' style={{fontSize:35, paddingTop:5}}>
                                    Pesquisar
                                </Typography>

                                <Grid container style={{ flexGrow: 1 }}>

                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <TextField
                                                id="filtro"
                                                label="Filtro"
                                                margin="normal"
                                                variant="outlined"
                                                placeholder="Ex: 'artist', 'album', 'track'"
                                                value={this.props.search.filtro}
                                                onChange={this.props.filtroChanged}

                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <TextField
                                                id="busca"
                                                label="Busca"
                                                margin="normal"
                                                variant="outlined"
                                                value={this.props.search.text}
                                                onChange={this.props.searchChanged}
                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                        >
                                            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={() => this.props.searchApi(this.props.search.text, this.state.accessToken, this.props.search.filtro)} >
                                                <Search />
                                            </Fab>
                                        </Grid>
                                    </Grid>

                                </Grid>




                            </Paper>
                        </Grid>

                    </Grid>
                    <br />
                    <Grid container justify="center">

                        <Grid container
                            direction="row"
                            spacing={8}
                            style={{ width: '80%' }}
                        >
                            {/* Lista os artistas pesquisados */}
                            <RenderArtistas token={this.state.accessToken} />
                            {/* Lista os albums pesquisados */}
                            <RenderAlbums token={this.state.accessToken} />
                            {/* Lista as faixas pesquisadas */}
                            <RenderTracks />

                        </Grid>
                    </Grid>
                </div >
                :
                <Grid container justify='center'>
                    <Grid item xs={10} sm={6} md={3} style={{ paddingTop: 30 }}>
                        <Card  >
                            <CardActionArea>
                                <img src={logo} style={{ width: '100%' }} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" noWrap style={{ textAlign: 'center' }}>
                                        Bem-vindo
                                        </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ position: 'relative', left: '35%' }}>
                                <Button size="large" color="primary" onClick={() => location.href = 'https://search-spotify-backend.herokuapp.com/login'}>
                                    Login
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>


        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ search: state.search, dadosApi: state.dadosApi.dados })
const mapDispatchToProps = dispatch => bindActionCreators({ searchChanged, filtroChanged, searchApi }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home))