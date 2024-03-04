import { Component } from "react";
import './card-list.style.css';
import Card from "../card/card.component";

class CardList extends Component{
    render() {
        console.log('render')
        const { monsters } = this.props;

        return (            
            <div className="card-list">
                {monsters.map((monster) => {

                    return(
                        //creating a component that will reflect to cards. it will contain cards
                        <Card monster={ monster } />
                    )
                })}
            </div> 
        )
    }
}
export default CardList;