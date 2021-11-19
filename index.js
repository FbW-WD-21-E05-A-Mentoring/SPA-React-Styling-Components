//JSX
/* const main = <h1>Hello World </h1> */

/* const Main = ()=>{
    return(
        <h1>Hello World </h1>
    )
} */
/* Main()
<Main/> */

const Child = (text)=>{
    return(
        <p> {text.value} </p>
    )
}


class Main extends React.Component{
    
    render(){


        let styling = {
            backgroundColor:"yellow",
            display:"flex",
            listStyle:"none"
        }
        let data =[
            "this is para 1",
            "this is para 2",
            "this is para 3"
        ]

        return(
            <div> 
                <ul style={styling}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <Child value={data[0]}/> 
                <Child value={data[1]} /> 
                <Child value={data[2]}/> 
                
                <h1 style={{color:"red", border:"2px solid black"}}> Hello World  </h1>
                <h2 className="heading">This is second heading</h2>
            </div>
        )
    }
}


ReactDOM.render( <Main/> , document.getElementById("root"))