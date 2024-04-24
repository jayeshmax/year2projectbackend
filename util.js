function calculateStayDuration(booking) {
    // Parse the start date
    const fromDate = new Date(
        booking.fromYear,
        parseInt(booking.fromMonth) - 1, // Months are zero-indexed in JavaScript Date objects
        booking.fromDay
    );

    // Parse the end date
    const toDate = new Date(
        booking.toYear,
        parseInt(booking.toMonth) - 1,
        booking.toDay
    );

    // Calculate the difference in milliseconds
    const timeDifference = toDate.getTime() - fromDate.getTime();

    // Convert the difference to days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysDifference;
}

export {calculateStayDuration}
