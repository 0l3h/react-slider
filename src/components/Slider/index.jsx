import React, { Component } from 'react';
import styles from './Slider.module.scss';
import Image from './../Image';
import Controls from '../Controls';

class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentSlide: 0,
            slides: [
                'https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg',
                'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
                'https://concordiensis.com/wp-content/uploads/2021/04/istockphoto-157639696-612x612-1.jpg',
                'https://i.pinimg.com/originals/a7/a4/27/a7a4279033d4ceae89ce92569764017d.jpg',
            ],
            handlers: [
                this.nextSlide, 
                this.prevSlide, 
                this.playSlideshow, 
                this.stopSlideshow
            ],
        };
    }

    /** Updates currentSlide state with a number of a current image*/
    setImageToCurrent = () => {
        this.setState((state) => {
            return {currentSlide: state.currentSlide};
        });
    };

    /** Shows next slide */
    nextSlide = () => {
        const {currentSlide, slides} = this.state;
        if(currentSlide < slides.length - 1) {
            this.setState((state) => {
                return {currentSlide: state.currentSlide + 1};
            });
        } else {
            this.stopSlideshow();
        }
    };

    /** Shows previous slide */
    prevSlide = () => {
        const {currentSlide} = this.state;

        if(currentSlide > 0) {
            this.setState((state) => {
                return {currentSlide: state.currentSlide - 1};
            });
        }
        this.stopSlideshow();
    };

    /** Activates slideshow */
    playSlideshow = () => {
        const slideshow = setInterval(() => {
            this.nextSlide();
        }, 3000);
        this.setState({isSlideshowPlaying: slideshow});
    };

    /** Pauses (stops) slideshow */
    stopSlideshow = () => {
        const {isSlideshowPlaying} = this.state;
        this.setState({isSlideshowPlaying: false});
        clearInterval(isSlideshowPlaying);
    };

    render() {
        const {currentSlide, slides} = this.state;
        const imageToRender = slides[currentSlide];
        return (
            <div className={styles.slider}>
                <img alt='nature' className={styles.background} src={imageToRender}/>
                <Image imageSource={imageToRender}/>
                <Controls {...this.state}/>
            </div>
        )
    }
}

export default Slider;