import React, { Component } from 'react';
import styles from './Controls.module.scss';
import {ReactComponent as ButtonNextIcon} from './../../common/button-next-icon.svg';
import {ReactComponent as ButtonPreviousIcon} from './../../common/button-previous-icon.svg';
import {ReactComponent as ButtonPlayIcon} from './../../common/play.svg';
import {ReactComponent as ButtonPauseIcon} from './../../common/pause.svg';

class Controls extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.isSlideshowPlaying !== this.props.isSlideshowPlaying;
    }
    
    render() {
        const {isSlideshowPlaying, currentSlide, slides, handlers: [nextSlide, prevSlide, playSlideshow, stopSlideshow]} = this.props;
        const isLastOneSlide = currentSlide < slides.length-1 && isSlideshowPlaying;

        return (
            <div className={styles.controller}>
                <button className={styles.sliderButton} onClick={prevSlide}><ButtonPreviousIcon/></button>
                <button className={styles.sliderButton} 
                onClick={isLastOneSlide? 
                        stopSlideshow : playSlideshow}>
                        {isSlideshowPlaying? 
                        <ButtonPauseIcon/> : <ButtonPlayIcon/>}
                </button> 
                <button className={styles.sliderButton} onClick={nextSlide}><ButtonNextIcon/></button>
            </div>
        )
    }
}

export default Controls;