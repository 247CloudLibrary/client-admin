
const LendingItemForm = () => {
    return (
        <div>
            <CheckBox>
                
            </CheckBox>
            <Thumbnail>

            </Thumbnail>
            <Detail>

            </Detail>
            <Status-bar>

            </Status-bar>
        </div>
    );
};


const LendingListForm = () => {
    return(
        <div className="lendingListFormBlock"></div>
            <ResultFilter> 이것은 필터입니다.</ResultFilter>
            <div>
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
                <LendingItemForm />
            </div>
        </>
    )
    
}
export default LendingListForm;