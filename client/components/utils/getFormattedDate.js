export const getFormattedDate = (date) => {
    const months = ["Jan", "Feb", "Mar",
                    "Apr", "May", "Jun",
                    "Jul", "Aug", "Sept",
                    "Oct", "Nov", "Dec"];
  
    return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
  }