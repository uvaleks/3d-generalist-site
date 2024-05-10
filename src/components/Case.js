function Case({ caseStyle, children }) {

    return (
        <>
            <section className={`case ${caseStyle ? caseStyle : ""}`}>
                {children}
            </section>
        </>
    );
  }
  
  export default Case;