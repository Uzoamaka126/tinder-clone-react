import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import database from './Firebase'

export function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // onSnaphot: listen and take a picture of the db
        // return all of the data in the database in the form of a snapshot
        // every time the database changes, take a picture of it 
        
        // subscribe or trigger a listener every time people changes
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            // go through all the docs (array) and return the data on each doc
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            // this is the cleanup
            unsubscribe();
        }
    })

    return (
        <div className="tinderCards__cardContainer">
            {people && people.map(person => (
                <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={['up', 'down']}
                >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
            ))}
        </div>
    )
}