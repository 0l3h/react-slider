import React, { Component } from 'react';
import styles from './Image.module.scss';

class Image extends Component {
    render() {
        const {imageSource} = this.props;
        return <img className={styles.image} alt='nature' src={imageSource}/>
    }
}

export default Image;