
function Message(){
    // JSX code JavaScript XML -> converts to standard javascript
    const name = "Mounir";
    if(name)
    {
        return <h1>Hello {name+" "+42}</h1>;
    }
    else
    {
        return <h1>Hello World</h1>;
    }
}

export default Message;