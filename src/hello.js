define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        getInitialState: function(){
            let queryParamDefaultName = {};
            if(window.location.search !== ''){
                // console.log(window.location.search);
                queryParamDefaultName = {name: window.location.search.match(/name=(.*)/).pop()};
            } else {
                queryParamDefaultName = {name: 'Bobby Dole'};
            }
            return queryParamDefaultName;
        },
        displayName: 'Hello',
        getName: function(ev){
            let name = ev.target.value;
            // console.log(name);
            this.setState({name});
        },
        render: template
    });
});

// Enhance the previous project so that an initial value for the name field can be provided via the URL.