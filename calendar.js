class Calendar {

    constructor() {
        this.calendar = Flexy.Frame("column");


        let cellStyle={
            textAlign: "center",
            padding:"5px",
            border: "1px solid black",
            borderCollapse: "collapse",
        }

        let table = new FlexyElement("table").style({borderCollapse: "collapse",margin:"auto",background:"white",borderRadius:"5px"});
        let tHeader = new FlexyElement("thead").style({fontWeight: "bold"});table.add(tHeader);
        let headerRow = new FlexyElement("tr");tHeader.add(headerRow);
        headerRow.add(new FlexyElement("td"));
        this.getWeekDays("da-DA").forEach(d=>{
            let td = new FlexyElement("td").style(cellStyle);
            td.add(Flexy.Label(d));
            headerRow.add(td);
        })
        let tBody=new FlexyElement("tbody");table.add(tBody);
        for(let r=0;r<5;r++) {
            let row=new FlexyElement("tr");tBody.add(row);
            let w=new FlexyElement("td");row.add(w);
                w.add(Flexy.Label("w"+r).style({paddingRight:"10px",paddingLeft:"5px"}));
            for(let c=0;c<7;c++) {
                let col=new FlexyElement("td").style(cellStyle);row.add(col);
                col.add(Flexy.Label(r+"x"+c));
            }

        }

        this.calendar.add(table);




    }


    getWeekDays(locale) {
        var baseDate = new Date(Date.UTC(2017, 0, 2)); // just a Monday
        var weekDays = [];
        for (let i = 0; i < 7; i++) {
            weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'short' }));
            baseDate.setDate(baseDate.getDate() + 1);
        }
        return weekDays;
    }

    getCalendar() {
        return this.calendar;
    }
}