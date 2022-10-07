const Company = (props) => {
    return (
        <div>
            <h1>{props.ticker}</h1>
            <h2>{props.fullName}</h2>
            <p>{props.companyOverview}</p>
        </div>
    )
}

export default Company;