export const GroceryList = ({ title, status, id, handleToggle }) => {
    // console.log("ID form", title , "is", id)
    return (
        <>
            <div>
                {title} - {status ? "Done" : "Not Done"}
                <button onClick={() => handleToggle(id)}>Mark as Done</button>
            </div>
        </>
    );
};