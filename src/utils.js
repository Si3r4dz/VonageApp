
export const parseDate = (date) => {
        let tmp = new Date(date);
        return `${tmp.getDate()}.${tmp.getMonth() + 1}.${tmp.getFullYear()} ${tmp.getHours()}:${tmp.getMinutes()}`;
    }

export const checkDeadline = (date) => {
        let diff = (new Date(date) - new Date())/3600000;
        if(diff<24 && diff>0){
            return "#ffcc00";
        }
        else if(diff<0){
            return "#cc3300";
        }
        else{
            return "#339900";
        }
    }    