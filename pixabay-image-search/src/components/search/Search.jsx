import { Component } from 'react'
import { TextField, Select, MenuItem, FormHelperText, FormControl } from '@mui/material';
import axios from 'axios'
import ImageResults from '../image-results/ImageResults';


class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: `${import.meta.env.VITE_PIXABAY_API_KEY}`,
        images: []
    }

    onTextChange = (e) => {
        const val = e.target.value
        this.setState({ [e.target.name]: val }, () => {
            if (val === '') {
                this.setState({ images: [] })
            } else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                    .then(res => this.setState({ images: res.data.hits }))
                    .catch(err => console.log(err))
            }
        })
    }

    onAmountChange = (e) => {
        this.setState({ amount: e.target.value }, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err))
        })
    }

    render() {
        return (
            <div className='search-container'>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        id='outlined-search'
                        label='Search For Images'
                        name='searchText'
                        type='search'
                        defaultValue={this.state.searchText}
                        onChange={this.onTextChange}
                        fullWidth
                    />
                </FormControl>
                <br />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={this.state.amount}
                        label="Amount"
                        onChange={this.onAmountChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                    </Select>
                    <FormHelperText>Number of Images in Result</FormHelperText>
                </FormControl>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    }
}


export default Search;