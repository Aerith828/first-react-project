export const formatDate = (date) => {
    if (!date) {
        return "";
    }

    let parsedDate = date;

    if (typeof date === "string") {
        parsedDate = new Date(date);
    }

    return parsedDate.getDate() + "/" + (parsedDate.getMonth() + 1) + "/" + parsedDate.getFullYear();

    // `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; --> autre formule, template iteroll
};