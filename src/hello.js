define(['react', 'lodash', './hello.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        getInitialState: function(){return {name:'bob dole'}},
        displayName: 'Hello',
        getName: function(ev){
            let name = ev.target.value;
            // console.log(name);
            this.setState({name});
        },
        render: template
    });
});
