class Menu {
    constructor(side, background,logoText) {
        let divStyle = {
            width: "20px",
            height: "3px",
            backgroundColor: "black",
            marginBottom: "2px"
        };

        this.main=Flexy.Frame("column").style({ background: background });

        if(side==="right") {
            this.navbar=Flexy.Frame("row-reverse").style({ background: background });
            this.hamburger = Flexy.Frame("column").id("hamburger").style({ padding: "5px",marginLeft:"auto" })
        } else {
            this.navbar=Flexy.Frame("row").style({ background: background });
            this.hamburger = Flexy.Frame("column").id("hamburger").style({ padding: "5px",marginRight:"auto" })

        }

        this.navbar.add(this.hamburger);
        this.hamburger.add(new FlexyElement("div").style(divStyle),"start");
        this.hamburger.add(new FlexyElement("div").style(divStyle),"start");
        this.hamburger.add(new FlexyElement("div").style(divStyle),"start");

        this.navbar.add(Flexy.Label(logoText).style({color:"white"}))

        this.main.add(this.navbar,"stretch");

        this.menuItems=Flexy.Frame("column").id("menu-items").style({ background: background,position: "absolute",top: "30px" });
        if(side==="right") {
            this.menuItems.style({right:"8"});
            this.main.add(this.menuItems,"end");
        } else {
            this.main.add(this.menuItems,"start");
        }
        this.menuItems.visible(false);
        

        let self=this;
        this.hamburger.onClick(()=>{
            if(self.menuItems.visible()) {
                self.menuItems.visible(false)
            } else {
                self.menuItems.visible(true)
            }
        });

        return;
        
    }

    addMenu(text,onselect) {
        let menuStyle={
            color:"white",
            marginLeft:"5px",
            marginTop:"5px",
            marginBottom:"5px",
            paddingRight: "40px"
        }
        
        let menuItem=Flexy.Label(text).style(menuStyle);

        let self=this;

        menuItem.onClick(()=>{
            onselect(menuItem);
            self.menuItems.visible(false)

        });
        this.menuItems.add(menuItem,"start");

    }

    getMenu() {
        return this.main;
    }

    select(index) {
        let menuItem=this.menuItems.getChildren()[index];
        menuItem.click(menuItem);

    }

}