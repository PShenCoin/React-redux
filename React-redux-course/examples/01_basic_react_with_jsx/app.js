function Hello(){
    return <div>Hello to JSX</div>
}


const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Hello));