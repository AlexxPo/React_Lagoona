import React from "react";
import axios from "axios";

export default class Card extends React.Component {
    componentDidMount() {
    const { tours } = this.props;
axios.get('/tours.json').then(({ data }) => {
    tours(data);
});
    }
    static defaultProps = {
        id: 0,
        title: '',
        location: '',
        image: '',
        price: '',
        descr: '',
    }
    render() {
        const { title, location, image, price, descr } = this.props;
        return (
            <div className={'card'}>
                <div className="card__image">
                    <img src={image}/>
                </div>
                <h2 className={'card__title'}>{title} {location}</h2>
                <div>
                    {descr}
                </div>
                <div>
                    {price}
                </div>
            </div>
        );
    }
}
