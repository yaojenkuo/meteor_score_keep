import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

const players = [{
    _id: '1',
    name: 'Lauren',
    score: '102'
}, {
    _id: '2',
    name: 'Ralph',
    score: '-1'
}, {
    _id: '3',
    name: 'Andrew',
    score: '-12'
}];

const renderPlayers = function(playersList) {
    return players.map(function(player){
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>
    });
};

Meteor.startup(function(){
    let title = 'Score Keep';
    let name = 'Tom';
    let jsx = (
        <div>
            <h1>{title}</h1>
            <p>Hello {name}</p>
            <p>This is my second paragraph.</p>
            {renderPlayers(players)}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});