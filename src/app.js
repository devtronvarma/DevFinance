
const App = () => {
    return React.createElement(
        "div",
        { class: "jumbotron"}, [
            React.createElement("div", { class:"p-5 mb-4 bg-light rounded-3" }, [
                React.createElement("div", { class: "container-fluid py-5" }, [
                    React.createElement("h1", { class: "display-5 fw-bold" }, "DevFinanceApp"), 
                ]), 
            ]),

            React.createElement("div", { class:"search-group input-group mb-3" }, [
                React.createElement("input", { type:"text", class:"form-control", placeholder: "Search companies", 'aria-label': "company search" }, null),
                React.createElement("button", { class:"btn btn-primary", type: "button", id: 'search-button'}, "Search")
            ])
        ]
    )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));