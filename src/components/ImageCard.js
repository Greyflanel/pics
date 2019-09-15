import React from 'react';

class ImageCard extends React.Component {
constructor(props) {
super(props);

this.state = ({ spans: 0 });
/* Anytime we want to reach into the DOM and interact with some invidual element. We create a ref inside the constructor, an then we wire it up to an individual element by passing it as a ref property. Then later on, we can access that ref and get a handle on the actual DOM node. */
this.imageRef = React.createRef();
}

componentDidMount() {
    /* Event listener is listening for the event load. This will tell us when the image is loaded and rendered. */
    this.imageRef.current.addEventListener('load', this.setSpans);
}
    setSpans = () => {
const height = this.imageRef.current.clientHeight;

const spans = Math.ceil(height / 10 );

this.setState({ spans })
}

    render() {
        const { description, urls } = this.props.image;
        
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                ref={this.imageRef}
                src={urls.regular}
                alt={description} />
            </div>
        );
    }
}

export default ImageCard;