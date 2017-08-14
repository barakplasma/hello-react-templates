define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        getInitialState: function(){
            let initialState = {};
            const defLoc = {lat:0,long:0};
            if(window.location.search !== ''){
                // console.log(window.location.search);
                initialState = {name: window.location.search.match(/name=(.*)/).pop(),location:defLoc};
            } else {
                initialState = {name: 'Bobby Dole',location:defLoc};
            }

            initialState.inputs = ['input'];
            initialState.countryCity = {ChooseCountry: [], USA : ['san francisco','miami','nyc'], Israel : ['Tel' +
            ' Aviv','B7','Jeru']};
            return initialState;
        },
        displayName: 'Hello',
        getName: function(ev){
            let name = ev.target.value;
            // console.log(name);
            this.setState({name});
        },
        changeLocation: function(ev,latOrLong){
            // console.log(ev.target.value,latOrLong)
            let newCoordinate = parseFloat(ev.target.value);
            let otherCoord = latOrLong==='lat'?'long':'lat';
            this.setState({name: this.state.name,location:{[latOrLong]: newCoordinate,[otherCoord]:this.state.location[otherCoord]}});
            // console.log(this.state.location.lat, this.state.location.long);
        },
        changeInputs:function(addOrRemoveInput){
            let newInputs = this.state.inputs;
            if(addOrRemoveInput>0){
                newInputs.push('input');
            }
            if(addOrRemoveInput<0){
                newInputs.shift();
            }
            this.setState({name: this.state.name,location: this.state.location,inputs:newInputs})
        },
        printYourself: (ev)=>{console.log(ev.target.value)},
        changeCountry: function(ev){
            let newCountry = ev.target.value;
            // console.log(newCountry);
            let newState = Object.assign({},this.state,{currentCountry: newCountry});
            console.dir('ns',newState);
            this.setState(newState);
        },
        render: template
    });
});