import React, {Component} from 'react';

export default class Landing extends Component {
    constructor() {
        super();
        this.state = {
            animals: [
                {
                  name: "Fido",
                  img: "https://placeimg.com/200/200/animals"
                },
                {
                  name: "Sparkles",
                  img: "https://placeimg.com/200/200/animals"
                },
                {
                  name: "Pookers",
                  img: "https://placeimg.com/200/200/animals"
                }
              ]
        }
    }

    render() {
        const animalsMapped = this.state.animals.map( function(animalObj, index) {
            console.log(animalObj)
            return (
                <div key={index}>
                    <h1>{animalObj.name}</h1>
                    <img src={animalObj.img} alt='Loveable animal' />
                </div>

            )
        } );

        return (
            <main>
                <p>I'm the landing</p>
                { animalsMapped }
            </main>
        )
    }
}