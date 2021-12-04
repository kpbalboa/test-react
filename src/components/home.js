import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                this is home
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
            </div>
        )
    }
}


class Landing extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />
                this is Landing
            </div>
        )
    }
}

export  {Home, Landing}