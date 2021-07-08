import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            planet:"earth"
        };
        console.log("Hey Iam constructor");
    }
    componentDidMount(){
        this.setState({planet:"Mars"});
    }
    static getDerivedStateFromProps(props,state){
        console.log("iam from get derived state from props");
        return null;
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log({
            nextProp,nextState,
        });
    }
    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log()
    }
    render(){
        console.log("Hey Iam render");
        //Component Life-Cycle methods
        //view
        //logic
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}
export default User;
/*const User = (props)=>{
    return (<div>
        <h1>
            {props.name}
        </h1>
        <p>
            {props.description}
        </p>
    </div>);
};

export default User;
//props =>properties/parameters*/
